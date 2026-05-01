export default function Testimonial({ quote, name, role, photo }) {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <div className="testimonial-quote">"{quote}"</div>
        <div className="testimonial-author">
          <img src={photo} alt={name} className="testimonial-photo" />
          <div className="testimonial-info">
            <h4 className="testimonial-name">{name}</h4>
            <p className="testimonial-role">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
