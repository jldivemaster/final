class NotesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_note, only: [:show, :edit, :update, :destroy]
  def index
    @notes = Note.all
    # @mynotes = Note.all.filter{|note| note.user_id == current_user.id}
  end

  def new
    @note = Note.new
  end

  def create
    @note = Note.create(note_params)
    if @note.save
      redirect_to @note
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    @note.update(note_params)
    if @note.save
      redirect_to @notes
    else
      render :edit
    end
  end

  def destroy
    @note.delete
    @notes = Note.all
    render json: { notes: @notes, error: @note.errors.full_messages, message: "Note deleted" }
  end

  private

      def note_params
        params.require(:note).permit(:lab_title, :quick_ref, :body, :mod_num)
      end

      def set_note
        @note = Note.find(params[:id])
      end
end
