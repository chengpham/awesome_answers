#  rails g mailer answer_mailer
class AnswerMailer < ApplicationMailer

    def hello_world
        # You can run this in rails c (rails console)
        # AnswerMailer.hello_world.deliver_now
        mail(
            to: 'naveed@codecore.ca',
            from: 'info_hello_world@awesome-answer.io',
            cc: 'jj@movies.com',
            bcc: 'someone.else@example.com',
            subject: 'Hello, World!'
        )
    end

    def new_answer(answer)
        @answer=answer
        @question=answer.question
        @question_owner=@question.user
        mail(
            to: @question_owner.email,
            subject: "#{answer.user.first_name} answered your question!"
        )

    end
    private

end
