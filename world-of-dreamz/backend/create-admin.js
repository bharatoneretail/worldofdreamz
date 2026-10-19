const adminData = {
  email: "Admin@worldofdreamz.com",
  password: "divyam123" // Change this to your desired password
};

// Native fetch is built into Node.js v18 and newer
fetch('http://localhost:5000/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(adminData)
})
.then(res => res.json())
.then(data => {
  console.log('✅ Success:', data);
  process.exit();
})
.catch(err => {
  console.error('❌ Error:', err.message);
  console.log('💡 Make sure your backend server is running on port 5000!');
  process.exit(1);
});