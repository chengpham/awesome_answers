# rails g controller api/v1/questions --no-assets --no-helper --skip-template-engine
# module Api
#     module V1
#         class QuestionController < ApplicationController
#         end
#     end
# end
# 👆🏻 is like this 👇🏻
class Api::V1::QuestionsController < Api::ApplicationController
    before_action :find_question, only:[:show, :destroy, :update]
    before_action :authenticate_user!, only:[:destory, :update]
    def index 
        # curl http://localhost:3000/api/v1/questions #👈🏻 on terminal
        # or
        # http://localhost:3000/api/v1/questions # 👈🏻 on browser
        questions= Question.order created_at: :desc
        render json: questions , each_serializer: QuestionCollectionSerializer
        # we will provide 'each_serializer' named argument to the option hash of the render method that tells which serializer to use with each instance
    end
    def show
        # question=Question.find params[:id]
        render json: @question
    end
    def destroy
        # question=Question.find params[:id]
        if @question.destroy
            head :ok
        else
            head :bad_request
        end
    end
    def create
        question=Question.new question_params
        question.user=current_user
        if question.save
            render json:{id: question.id}
        else
            render(
                json: {errors: question.errors},
                status: 422 # unprocessible entity HTTP status code
            )
        end
    end
    def update
        if @question.update question_params
            render json: {id: @question.id}
        else
            render(
                json: {errors: @question.errors},
                status: 422
            )
        end
    end
    private
    def find_question
        @question=Question.find params[:id]
    end
    def question_params
        params.require(:question).permit(:title,:body,:tag_names)
    end
end
