class AppointmentsController < ApplicationController
  def index
    render json: Appointment.all
  end
end
