import ContactForm from '../components/ContactForm';
const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-4">Get in Touch</h1>
      <p className="text-center text-gray-600 mb-12">Ready to build your dream entertainment park? Let's talk.</p>
      <ContactForm />
    </div>
  );
};
export default Contact;