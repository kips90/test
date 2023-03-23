class QuestionController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index 
       @questions=Question.all
    # #    @questions = Question.all
    #    render json: @questions.include: :user)
       render json: @questions.as_json(include: :user)

    #    render :json => Question.all.to_json( :include => [:user] )



    #    (include: :user)
   end

   def create 
        question =  @current_user.questions.create(title: params[:title], description: params[:description], user_id: params[:user])
        if question.valid?
            render json: { "success": "saved successfully!"}
        else
            render json: question.errors.messages
        end
   end

end