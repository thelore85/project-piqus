import ProjectCard from '@/app/(user)/profile/Components/ProjectCard';

// component function
export default function TktList({ tickets, onUpdate }) {

  return (
    <>
      {tickets.map((ticket) => (
        <ProjectCard key={ticket.id} ticket={ticket} onUpdate={onUpdate} />
      ))}

      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets for this user!</p>
      )}
    </>
  );
}
