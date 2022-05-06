# Disabling CSRF token Verification - Cross Site Request Frogery

class Api::ApplicationController < ApplicationController
    skip_before_action :verify_authenticity_token

    # rescue_from(<error-class>, with: <method-name>)
    # use rescue)from from in a controller to prevent an error of a class <error-class>
    # from crashing your rails application and do something instead.
    # <method-name> is a method that will handle the errors and do whatever you need instead of crashing
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid 

    private
    def authenticate_user!
        render(
            json: {errors: 'You are not logged in'},
            status: 422
        ) unless user_signed_in?
    end
    def record_invalid(error)
        # {
        #     errors: [
        #     {
        #         type: "ActiveRecord::InvalidRecord",
        #         record_type: "Question",
        #         field: "body",
        #         message: "...."
        #     }
        #     ]
        # }
        invalid_record=error.record

        errors=invalid_record.errors.map do |field,message|
            {
                type: error.class.to_s,
                record_type: invalid_record.class.to_s,
                field: field,
                message: message
            }
        end
        render(
            json: { status: 422, errors: errors },
            status: 422
        )
    end
end
