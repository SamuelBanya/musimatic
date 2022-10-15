+++
title = "Completion Of Phase 3 For Flatiron School Software Development Bootcamp"
author = ["Samuel Banya"]
date = 2022-10-15T00:00:00-04:00
draft = false
+++

I have recently completed the Phase 3 of the Flatiron School Software Development Bootcamp. As a result, I now know how to interact with the backend of a full stack web application.

Just for reminder purposes, the 'frontend' of a full stack web application is the beautiful client facing website that allows the user to interact with a given project to generate data. The 'backend' allows the user to then send the data from the 'frontend' to the 'backend', and process that data. The 'backend' of a full stack web application usually consists of some sort of database. In this case, I have learned how to utilize a SQLite3 database via a few different workflows.

At first, we learned how to deal with SQL commands directly made to a SQLite3 database. I then transitioned to learning how to use the 'Active Record' modules for the Ruby programming language. These methods do a lot of the heavy lifting of having to run SQL commands for you. The fantastic docs pages for the 'Active Record' module can be found here:

-   <https://guides.rubyonrails.org/active_record_basics.html>

In this Ruby relatd blog post, I will discuss the topic of 'attribute accessors', which aid a Ruby developer by providing macros to allow for easier ways to generate methods for 'read' and 'write' accessor to instance variables.

For example, you can create a Ruby class called 'Food' in which you define an instance variable called 'name' that you assign a value to it when a user decides to create an instance of the 'Food' class itself:

```ruby
class Food
  def name=(value)
    @name = value
  end
end

# User actually creating an instance of the 'Food' class:
bread = Food.new

bread.name = "Salami"
```

What's neat about using macros in accessor macros in this scenario is that instead of having to manually define an instance variable upon creation of an instance of the 'Food' class, you can instead tap into Ruby's ability to utilize the 'attr_accessor' method that would automatically create a 'read' and 'write' method for the 'Food' class itself.

For comparison purposes, you could take the long way around by using both the 'attr_reader' and 'attr_writer' macros to allow you to create 'read' and 'write' methods automatically for the 'Food' class which span two extra lines of code:

```ruby
class Food
  attr_reader :name
  attr_writer :name
end

# Person creating an instance of the 'Food' class:
salami = Food.new
salami.name = "Salami"
# Prints 'Salami' to console:
puts salami.name
```

Or, you can simply use 'attr_accessor' which allows you to create BOTH 'read' and 'write' macros for the 'Food' class within a single line:

```ruby
class Food
  attr_accessor :name
end

# Person creating an instance of the 'Food' class:
salami = Food.new
salami.name = "Salami"
# Prints 'Salami' to console:
puts salami.name
```

The end result is that by creating Ruby classes with attribute accessors gives you the flexibility in creating Ruby classes that have the ability to have read and write options for given instance variables, and also saves the user the hassle of having to create similar methods manually by hand.

The aspect of using 'attribute accessors' is better described in this article here for reference:

-   <https://www.rubyguides.com/2018/11/attr_accessor/>

A great reference on Stack Overflow for this topic can also be found here:

-   <https://stackoverflow.com/questions/4370960/what-is-attr-accessor-in-ruby>

Another great reference for Ruby classes can be found here:

-   <https://www.tutorialspoint.com/ruby/ruby_classes.htm>

Thanks for reading!

~ Sam