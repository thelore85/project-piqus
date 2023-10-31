import EditButton from "@/app/(admin)/tickets/CompTicket/EditButton";
import DeleteButton from "@/app/(admin)/tickets/CompTicket/DeleteButton";

export default function TicketButtons({ isEditing, handleCancel, handleEdit, handleSave, ticket}) {

  
  return (
    <div>
        {isEditing ? (
          <div className="p-2 bg-secondary-subtle rounded mt-4">
            <button className="btn btn-sm btn-light border-primary text-primary me-2" onClick={handleSave}>Save</button>
            <button className="btn btn-sm btn-light me-2" onClick={handleCancel}>Cancel</button>
          </div>
          ) : (
          <div className="p-2 bg-secondary-subtle rounded mt-4">
            <EditButton handleEdit={handleEdit} />
            <DeleteButton ticket={ ticket } />
          </div>
        )}
    </div>
  )
}
