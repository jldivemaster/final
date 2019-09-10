class NotesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_note, only: [:show, :edit, :update, :destroy]
  def index
    @notes = Note.all
  end

  def new
    @note = Note.new
  end

  def create
    @note = Note.create(note_params)
    if @note.save
      render json: { note: @note, message: "Note has been created." }
    else
      render json: { error: @note.errors.full_messages }
    end
  end

  def show
  end

  def edit
  end

  def update
    @note.update(note_params)
    if @note.save
      render json: { note: @note, message: 'Note successfully updated.' }
    else
      render json: { note: @note, error: @note.errors.full_messages }
    end
  end

  def destroy
    @note.delete
    @notes = Note.all
    render json: { notes: @notes, error: @note.errors.full_messages, message: "Note deleted" }
  end

  private

      def note_params
        params.require(:note).permit(:lab_title, :quick_ref, :body, :mod_num, :user_id)
      end

      def set_note
        @note = Note.find(params[:id])
      end
end
