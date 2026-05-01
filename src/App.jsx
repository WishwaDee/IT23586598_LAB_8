import Greeting from './components/Greeting';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';
import Button from './components/Button';
import Banner from './components/Banner';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div>
      <NavBar />
      
      <div className="main-content">
        <div id="home">
          <Banner 
            title="Welcome to Our Amazing Platform"
            subtitle="Discover the best products and services tailored just for you."
            bgImage="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80"
            ctaText="Get Started Now"
          />
        </div>

        <div id="about">
          <Greeting />
        </div>

        <section id="services" className="section-container">
          <h2 className="section-title">Our Services</h2>
          <div className="grid-3">
            <Card 
              title="Web Development" 
              description="We build fast, responsive, and beautiful web applications using modern technologies."
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
            >
              <Button variant="primary" size="small">Learn More</Button>
            </Card>
            <Card 
              title="UI/UX Design" 
              description="Our design team creates intuitive and engaging user experiences that delight your customers."
              image="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80"
            >
              <Button variant="primary" size="small">Learn More</Button>
            </Card>
            <Card 
              title="Digital Marketing" 
              description="Grow your online presence and reach your target audience with our proven marketing strategies."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
            >
              <Button variant="primary" size="small">Learn More</Button>
            </Card>
          </div>
        </section>

        <section id="testimonials" className="section-container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="grid-3">
            <Testimonial 
              quote="This platform has completely transformed how we do business. Highly recommended!"
              name="Sarah Jenkins"
              role="CEO, TechStart"
              photo="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
            />
            <Testimonial 
              quote="The team is incredibly responsive and delivered exactly what we needed on time."
              name="Michael Chen"
              role="Marketing Director"
              photo="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
            />
             <Testimonial 
              quote="Outstanding quality and attention to detail. We couldn't be happier with the results."
              name="Emily Rodriguez"
              role="Product Manager"
              photo="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
            />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
