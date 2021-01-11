# Maintenance management system
An application that helps to manage the maintenance team's tasks, complaints to external suppliers and parts purchases.

## Functional description
The application was created to help manage the tasks of the maintenance team at hatcheries and farms. Tasks have been divided into locations and types.
They can be added so that the system could be reusable also in other companies.
The ability to assign tasks to machines or a group of machines (production line) allows you to create reports for each machine on the tasks performed.
In addition, a record of complaints reported to external companies regarding the operation of individual machines has been added.
The procurement module facilitates the supervision of the execution of orders for parts from suppliers. In the future, I plan to expand with stock levels of my parts.
A hall (in the case of a hatchery) or a henhouse (in the case of a farm) can be assigned to each location, which allows for more precise marking of the location of machines.

## List of system functions
1. Tasks to be performed:
  - Name
  - The machine
  - Location
  - Planned date of execution
  - Task type
  - Recurring task - repetition time
  - Date of execution
2. Machines:
  - Name
  - Serial number
  - Location
  - Hall / chicken coop
  - Group of machines
3. Locations:
  - Name
  - Address
  - Phone number
  - Email
4. Halls / Hen houses:
  - Name
  - Description
  - Location
5. Complaints:
  - Part name
  - Supplier
  - Description of the complaint
  - Filing date
  - Removal date
  - The machine
6. Orders:
  - Name
  - Description
  - Supplier
  - Date of order
  - Delivery date
  - Location
