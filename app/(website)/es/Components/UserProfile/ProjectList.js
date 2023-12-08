import ProjectCard from './ProjectCard';

// component function
export default function TktList({ tickets, onUpdate }) {

  return (
    <>
      {tickets.map((ticket) => (
        <ProjectCard key={ticket.id} ticket={ticket} onUpdate={onUpdate} />
      ))}

      {tickets.length === 0 && (
        <p className="text-center">Non hai nessun porgetto aperto. Iniziane uno!</p>
      )}
    </>
  );
}
