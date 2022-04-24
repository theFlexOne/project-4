puts "Seeding has begun"
#?--------------------------

carlos = Barber.create name: "Carlos", wage: 10.0, start_date: DateTime.now.to_date
becky = Barber.create name: "Becky", wage: 8.0, start_date: DateTime.now.to_date
tanya = Barber.create name: "Tanya", wage: 20.0, start_date: DateTime.now.to_date

eric = Client.create name: "Eric"
adam = Client.create name: "Adam"
andy = Client.create name: "Andy"

Appointment.create when: DateTime.now.next_day, barber_id: 2, client_id: 1
Appointment.create when: DateTime.now.next_day, barber_id: 3, client_id: 2
Appointment.create when: DateTime.now.next_day, barber_id: 1, client_id: 3

#?--------------------------
puts "Seeding has completed"
