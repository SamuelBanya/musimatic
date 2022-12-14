+++
title = "Completion Of Phase 4 Project For Flatiron School Software Development Bootcamp"
author = ["Samuel Banya"]
date = 2022-12-13T00:00:00-05:00
draft = false
+++

My Phase 4 project can be found here which includes the 'client' and 'server' components which you will have to run in two separate terminals with its own associated commands dicated in the 'README' of the project:

-   <https://github.com/samuelbanya/craigscookout>

This particular project allowed me to utilize React with its frontend component, and 'Ruby On Rails' for its backend component.

The idea behind this app is that a user is allowed to create a cookout that other users can utilize. A user then creates foods which they will bring to this particular cookout.

One Rails specific feature that I learned for this particular app is the ability to authenticate users which is handle by the 'Users Controller' and 'Sessions Controllers' components from the Rails backend of the project. The way authentication works is that the user can sign up for an account. They can then provide their username and password and sign in.

The frontend portion of this login process is shown within this snippet here:

```js
function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}
```

The 'Ruby On Rails' components mentioned before help do a lot of the work to make sure that this happens smoothly. The 'UsersController' defines a 'create' method which creates a user based upon their username, and password. This is shown in this snippet found within the 'app/controllers/users_controller.rb' file of the project:

```ruby
class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
```

The 'SessionsController' does the heavy lifting of authenticating the same user we created earlier as it creates a 'session' only if it is able to find a user with that particular username, and if they authenticated successfully. Otherwise, it would not allow the user to proceed further. This is shown within this snippet of the 'app/controllers/sessions_controller.rb' file of the project:

```ruby
class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
```

Other than this portion of the application workflow, it is pretty much a React application that guides the user to create a cookout. The 'Cookout' component on the React frontend allows a user to fill out a related form to create a new Cookout. They can also edit or delete this cookout as well. A user can also create a new food that is associated with a particular cookout, and also edit or delete them as well. They are then greeted with a page that shows all of the cookouts that were made.

The better portion of the discussion of how Rails is useful in this scenario would be to discuss the workflow of how routing is done in this scenario. Whenever the user makes a React frontend call to the Rails backend, the related request is routed via the the routes present within 'config/routes.rb' file. The powerful tool that comes with Rails in this scenario would be the ability to create a 'resource' that automatically points to specific controllers and their associated methods.

In this scenario, I had to use nested routing, which is a bit complicated, but was required to fulfill the requirements for this project as it was highly dependent on the relationships present between the associated models. I mention this because the related routes file in question does feature this, so I figured I would at least mention this here before displaying the 'config/routes.rb' snippet:

```ruby
Rails.application.routes.draw do
  resources :cookouts do
    resources :foods
  end

  # Login related routes:
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
```

The 'CookoutsController' and 'FoodsController' act in similar ways since the workflow of making Rails method is just applying the 'convention' that matches the proper naming scheme dictated by the Rails framework itself. The idea is that as long as the proper names are kept, Rails will help you a ton with dealing with 'CRUD' capabilities on the backend. To boil it down in simpler terms, a lot of the work done to make Rails specific methods involves a workflow of finding a given Active Record object by its id, possibly manipulating it with the function, and then choosing whether or not to render it on screen for the user within its associated JSON response.

Here is the 'CookoutsController' related snippet within the 'app/controllers/cookouts_controller.rb' file for comparison:

```ruby

class CookoutsController < ApplicationController
    def create
        cookout = Cookout.create!(cookout_params)
        render json: cookout, status: :created
    end

    def update
        cookout = Cookout.find_by(id: params[:id])
        if cookout
            cookout.update(cookout_params)
            render json: cookout
        else
            render json: { errors: [cookout.errors.full_messages] }, status: :unprocessable_entity
        end
    end

    def index
        cookouts = Cookout.all

        if session[:user_id]
            render json: cookouts
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def show
        cookout = Cookout.find_by(id: params[:id])
        if cookout
            render json: cookout
        else
            render json: { error: "Cookout not found" }
        end
    end

    def destroy
        cookout = Cookout.find_by(id: params[:id])

        if cookout
            cookout.destroy
            head :no_content
        end
    end

    private

    def cookout_params
        # byebug
        params.permit(:name, :start_time, :end_time)
    end

end
```

Here is the 'FoodsController' related snippet within the 'app/controllers/foods_controller.rb' file for comparison:

```ruby
class FoodsController < ApplicationController
    def create
        food = @current_user.foods.create(food_params)

        render json: food, status: :created
    end

    def update
        food = @current_user.foods.find_by(id: params[:id])
        if food.user_id == @current_user.id
            food.update(food_params)
            render json: food
        else
            render json: { errors: [food.errors.full_messages] }, status: :unprocessable_entity
        end
    end

    def index
        foods = @current_user.foods.all

        if session[:user_id]
            render json: foods
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def show
        food = @current_user.foods.find_by(id: params[:id])
        if food
            render json: food
        else
            render json: { error: "Food not found" }
        end
    end

    def destroy
        food = @current_user.foods.find_by(id: params[:id])
        if food.user_id == @current_user.id
            food.destroy
            head :no_content
        end
    end

    private

    def food_params
        params.permit(:name, :cookout_id)
    end
end
```

Though using Rails is slightly more complicated than what was presented earlier, it does a lot of the heavy lifting for you, and is very powerful. Honestly, I would come back to it later on to make an API as I believe this it's strong point, so I'm looking forward to potentially using it again for another side project in the future.