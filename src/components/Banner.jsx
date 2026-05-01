import Button from './Button';

export default function Banner({ title, subtitle, bgImage, bgColor, ctaText }) {
  const style = bgImage 
    ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: bgColor || '#2b6cb0' };

  return (
    <div className="banner" style={style}>
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h2 className="banner-title">{title}</h2>
        <p className="banner-subtitle">{subtitle}</p>
        {ctaText && <Button variant="secondary" size="large">{ctaText}</Button>}
      </div>
    </div>
  );
}
