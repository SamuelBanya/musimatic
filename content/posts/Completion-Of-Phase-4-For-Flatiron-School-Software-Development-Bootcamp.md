+++
title = "Completion Of Phase 4 For Flatiron School Software Development Bootcamp"
author = ["Samuel Banya"]
date = 2022-12-14T00:00:00-05:00
draft = false
+++

The Phase 4 section featured the 'Ruby On Rails' framework, and more specifically its ability to utilize 'Active Record' which can be found here as this guide helps explain this in more detail than I ever could:

-   <https://guides.rubyonrails.org/active_record_basics.html>

'Rails', as it is commonly known, helps take the edge of from having to handle a lot of the 'backend' work that's required for a full stack web application. Remember, when someone mentions the 'frontend' of a 'full stack' web application, this means that they are referring to the user facing portion. Ex: Think of a typical modern website with forms, menus, etc. The 'backend' in this scenario handles all of the data fetch calls from the frontend. Ex: "I submitted this form with all of my user data and want to have something happen in the app". The 'Rails' backend in this scenario interprets what to do with this frontend data depending on the type of fetch call being made.

The process of how Rails handles routing for specific methods involves a few moving parts, so one related topic I would like to highlight in this blog post is the idea of how to use the 'Controller' methods provided by Rails. This to me is the heavy hitter reason why you would want to use 'Rails' in the first place since the 'Rails' framework dictates specific functions that can be used within the 'Controller' to help make your life easier. Reason being is that if you took the time to figure out what 'models' you want to be present in your app via the related 'migrations' you created that correspond to related database tables, then you will want some kind of easy way to access methods that interact with this data. The Rails specific methods for a 'Controller' allow you to interact with the project's 'model' data in more saner ways. Otherwise, you would be left to figure out the related SQL calls to your application's database on your own which is rarely fun in the first place. The fact that Rails does all of this SQL legwork for you is what makes it pretty awesome to use.

When you install Rails, you have the ability to use its associated bash terminal commands like the 'rails g' command in order to 'generate' certain project components for you. The 'rails g' command is basically equivalent to "Hey Rails, you go ahead and 'generate' something for me and place it in the correct directory structure as well." The beauty of this is that Rails will generate a project component for you, and magically place it in the correct directory structure of your project.

For example, we can create a new 'Controller' with Rails to interact with our 'cookouts' database table via the following command, NOTE: I used the '--no-test-framework' to prevent Rails from adding unnecessary testing components to the project:

```bash
rails g controller cookouts --no-test-framework
```

The above command then creates the associated 'app/controllers/cookouts_controller.rb' within the 'app/controllers' directory of the project.

From there, you are left to figure out what is necessary for your project's needs since this is dependent if your specific 'model' for your database table needs to be 'CRUD' (Create Read Update Delete) compatible for not. Reason being is that Rails has its own methods that handle CRUD capability, and you would need to use their specific function names if you want it to work properly.

A good example of a 'Controller' in action would be the 'CookoutsController' I used for my Phase 4 project which is shown in the following snippet which I will show first, and then later explain:

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

Looks intimidating, right? However, if you read through each section and try to figure out what it might be doing, then you start to learn by example of what it's actually doing. This is especially useful to new developers since most of the learning process for learning development is just recognizing patterns and later just applying them at will.

Let's take the 'create' method above.

The 'create' method literally creates a new 'Cookout' on the Rails backend with the parameters that were provided from the frontend. In my frontend application, I provided the details of an individual 'cookout' which included the 'name', 'start_time' and 'end_time' for the given cookout. Rails then acknowledges this data by making a related call to the backend SQL database, and then 'renders' or 'displays' a 'JSON' (Javascript Object Notation) response that the frontend React portion of the application can use. The process of the 'frontend' receiving a JSON response from the 'backend' is useful in a full stack web application because you want to make sure that the backend acknowledges changes to the database, and you want to ensure that the frontend web application also updates its own data in real time. In a React project like this, I did this by updating the 'state' of the associated frontend data with the 'useState' React hook function accordingly.

Back to the backend again for more CRUD based methods provided by Rails. The 'update' function finds a cookout by its particular 'id', updates the 'cookout' in the backend database, and then gives the JSON response back to the frontend. The 'index' method shown above is handy as it allows the application to display ALL of the cookouts present, which was showcased on the 'View All Cookouts' React component of my project. The 'show' method would do a similar action to the 'index' method, but is done for a specific individual cookout. The 'destroy' method shown allows Rails to find a cookout by its 'id', and then use the 'destroy' method to remove it from the database.

Even though these Controller based methods provided by Rails might seem simple at first, the bigger picture is that Rails is preventing you from having to even touch a single line of SQL to make any of the database actions happen, and is super useful in any modern full stack web application.

For future reference, feel free to check out this Rails guide which goes over how 'Controllers' fit within the 'Model View Controller' (MVC) design paradigm:

-   <https://guides.rubyonrails.org/active_record_basics.html>