import ProjectCard from '@/app/(user)/profile/CompProfile/ProjectCard';

// component function
export default function TktList({ tickets, onUpdate }) {

  const reversedTickets = tickets.reverse();

  return (
    <>
      {reversedTickets.map((ticket) => (
        <ProjectCard key={ticket.id} ticket={ticket} onUpdate={onUpdate} />
      ))}

      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets for this user!</p>
      )}
    </>
  );
}
