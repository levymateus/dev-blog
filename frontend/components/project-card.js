import Button from "../components/button"

function ProjectCard({ title, description, color, onClick }) {
  return <div data-color={color} className="full-width p-32 card">
    <h2>{title}</h2>
    <p>{description}</p>
    <Button variant="secondary" onClick={onClick} active>Button</Button>
  </div>
}

export default ProjectCard
