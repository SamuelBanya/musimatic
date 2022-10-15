+++
title = "Completion Of Phase 3 Project For Flatiron School Software Development Bootcamp"
author = ["Samuel Banya"]
date = 2022-10-14T00:00:00-04:00
draft = false
+++

I can easily say this web application has been quite a challenge to pull off. Not only is it using multiple React controlled forms, but it is using 'useState' and 'useEffect' hooks to make sure everything is in sync within certain parent and child components. Ontop of that, I have had to really make sure that the Ruby based models of the backend matched the requirements of the project as well, which was tricky without the ability of having a 'User' specific model to join a few of the models present.

You can start this app by navigating to the following repos, the first of which for the 'Frontend' component, and the second of which for the 'Backend' / Ruby / Sinatra backend:

-   Frontend:
-   <https://github.com/SamuelBanya/SmoothMoves-Frontend>
-   Backend:
-   <https://github.com/SamuelBanya/SmoothMoves>

I am assuming you know how to install npm and Ruby style projects, so I will leave you to install each of these components accordingly from the repos themselves.
You can start the frontend component with this command:

```bash
npm start
```

You can start the backend component with this command:

```bash
bundle exec rake server
```

That being noted, this app is basically a checklist app that allows the user to specify a starting move location, and an ending move location. This was the app I wish I had before I started a huge move from the South to the Midwest a month or so ago.

The user is presented with three available routes which include the '/about', '/moves', and '/items' based components.

Within The '&lt;About /&gt;' Component:
Inside the '&lt;About /&gt;' component, the user is presented with features that currently exist, as well as planned roadmap items via future edits.

Within The '&lt;Move /&gt;' Component:
The user is then able to progress to the '&lt;Move /&gt;' component which allows them to create a new 'Move' which then gets sent to the backend via a POST based fetch() request.

The user is also able to edit an existing move so that they can change the 'pickup location' or the 'dropoff location' accordingly. Note that the moves are shown by their final 'dropoff location', since when you discuss a move from NYC to San Francisco, you would most likely call it your 'Move to San Francisco', hence it would be labeled as 'San Francisco' in the dropdown menu itself.

Users are able to also delete a move as well in this same menu.

By providing the user with this ability to 'create', 'read', 'update', and 'delete' moves, this makes this project's '/moves' route 'CRUD' or 'Create Read Update Delete' compatible, which fulfills the requirements of this project.

Within The '&lt;Item /&gt;' Component:
Users are able to select a dropoff location, and then select the amount of items they want to move.

This will create a corresponding carousel form of many forms, each of which contains an individual React controlled form.

The user then can submit the items to the checklist, which will then generate the corresponding 'Checkbox' Material UI components at the very bottom of the app itself.

Overall Workflow:
The overall workflow of the entire app includes the following, which is included since it is a bit complicated underneath the hood, and is more for my own benefit if I want to revisit it later on to add the additional 'roadmap items' at another point:

Workflow:
App.js: This is the parent component for all components in the app itself, which utilizes a 'useEffect' hook itself to match a 'GET' based fetch() request to the backend to grab all of the available moves which are used for dropdown items in various components include including the '&lt;Moves /&gt;', and '&lt;Items /&gt;' parent components respectfully.

This is the specific useEffect block responsible for this behavior:

```js
const [moves, setMoves] = useState([]);
useEffect(() => {
  fetch("http://localhost:9292/moves", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setMoves(data);
    })
}, [moves]);
```

Under 'src/components/generalComponents':
About.js: This just contains information about the app itself.
NavBar.js: This contains the top navigation bar components of the app itself.

Under 'src/components/moveComponents':
Moves.js: This is a parent component that is responsible to rendering the '&lt;CreateMoveForm&gt;' and '&lt;EditMoveForm&gt;' child components.

CreateMoveForm.js: This is a React controlled form that contains event handlers to help create moves with corresponding calls to the backend.

EditMoveForm.js: This is another React controlled form that allows the user to select a given move based upon the 'dropoff location' and to edit the individual 'pickup' and 'dropoff' locations respectively. It also allows the user to delete the given move. All of these actions help make the 'Moves' component CRUD compatible.

Under 'src/components/itemComponents':
Items.js: This is a parent component that is responsible for rendering the '&lt;ChooseMoveForm&gt;' and '&lt;ItemsForm&gt;' child components.
ChooseMoveForm.js: This is a component that contains a React controlled form that allows the user to select the individual move that they want to create items for.
ItemsForm.js: This is a somewhat complicated section of the app itself that allows the user to determine the amount of items they want to move, as well as display a carousel based React controlled form that allows the user to enter details for each item they want to move. When the user is done filling out the information, they are then presented with a checklist at the very bottom of the page.
ItemCard.js: This is the individual carousel React controlled form for each item that the user wants to ship.

Regarding The Backend:
The relationships within the backend include the following ideas:

The 'Item' class has the 'belongs_to' Active Record based relationship to the 'Move' class, which is represented by the following code within the '/app/models/item.rb' file:

```ruby
class Item < ActiveRecord::Base
  belongs_to :move
end
```

The 'Move' class has the 'has_many' Active Record based relationship to the 'Item' class, which is represented by the following code within the '/app/models/move.rb' file:

```ruby
class Move < ActiveRecord::Base
  has_many :items
end
```

I then defined routes within 'application_controller' so that I can utilize various API endpoints to make calls from the frontend facing React web app to the backend facing Ruby / Sinatra instance which is utilizing a SQLite3 database, which can be observed in the following code found within the '/app/controllers/application_controller.rb' file:

```ruby
class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  # Add your routes here
  get "/moves" do
    moves = Move.all()
    moves.to_json(includes: :item)
  end

  post "/moves" do
    move = Move.create(
      pickup_location: params[:pickup_location],
      dropoff_location: params[:dropoff_location]
    )
    move.to_json(includes: :item)
  end

  patch "/moves/:id" do
    move = Move.find(params[:id])
    move.update(
      pickup_location: params[:pickup_location],
      dropoff_location: params[:dropoff_location]
    )
    move.to_json(includes: :item)
  end

  delete "/moves/:id" do
    move = Move.find(params[:id])
    move.destroy()
    move.to_json(includes: :item)
  end

  # NOTE: This is just to test if we are actually receiving any 'items' that are sent via POST requests from the frontend:
  get "/moves/:id/items" do
    move = Move.find(params[:id])
    move.to_json(include: :items)
  end

  # NOTE: This is the original route before I looped through individual POST requests:
  post "/moves/:id/items" do
    # Related Docs page on 'collection.create' method:
    # https://guides.rubyonrails.org/association_basics.html#methods-added-by-has-many-collection-create-attributes
    item = Item.create(
      move_id: params[:id],
      name: params[:name],
      length: params[:length],
      width: params[:width],
      height: params[:height],
      weight: params[:weight]
    )
    item.to_json()
  end

  # NOTE: This is the modified route where you can provide the entire array:
  # post "/test/:id" do
  # post "/moves/:id/items" do
  #   move = Move.find(params[:id])
  #   newItems = move.items.create(params[:items])
  #   move.to_json(include: :items)
  # end
end
```

The only other interesting thing to note is the cool aspects of the backend that are responsible for running the server on port 9292, which was already part of the forked project itself, and can be found within the 'Rakefile' of the project that is referred to when the user starts the backend with the 'bundle exec rake server' command:

```ruby
require_relative "./config/environment"
require "sinatra/activerecord/rake"

desc "Start the server"
task :server do
if ActiveRecord::Base.connection.migration_context.needs_migration?
  puts "Migrations are pending. Make sure to run `rake db:migrate` first."
  return
end

# rackup -p PORT will run on the port specified (9292 by default)
ENV["PORT"] ||= "9292"
rackup = "rackup -p #{ENV['PORT']}"

# rerun allows auto-reloading of server when files are updated
# -b runs in the background (include it or binding.pry won't work)
exec "bundle exec rerun -b '#{rackup}'"
end

desc "Start the console"
task :console do
ActiveRecord::Base.logger = Logger.new(STDOUT)
Pry.start
end
```

As you can see from the above sections, this app is relatively complex on the backend, but is pretty simple in terms of the relationships and routes present on the backend. Overall, this was an interesting challenge to complete, and I'm very happy to say that at least I did something original with the requirements that I was given, and am happy with the results.