![HotelBooking1](https://github.com/user-attachments/assets/e8ff4514-5bec-410c-a095-414ae218fb26)# 🏨 Airbnb Clone — Frontend
 
A production-level hotel booking platform frontend built with **React.js + Vite**, inspired by Airbnb. Fully responsive with Dark & Light mode support, seamless booking flow, and a powerful hotel manager dashboard.
 
---
 
## 🌐 Live Demo
 
🔗 **[https://airbnb-frontend-peach.vercel.app/](https://airbnb-frontend-peach.vercel.app/)**
 
---

## 🧪 Demo Login (Try it out!)
 
| Field | Value |
|-------|-------|
| 📧 Email | chai@gmail.com |
| 🔑 Password | pass |

---
## 🔗 Backend Repository
 
👉 **[Airbnb-Backend](https://github.com/Chaitnya27/Airbnb-Backend)**
 
---
 
## 🛠️ Tech Stack
 
| Technology | Purpose |
|------------|---------|
| React.js | UI Framework |
| Vite | Build Tool & Dev Server |
| Tailwind CSS | Styling |
| shadcn/ui | UI Component Library |
| Recharts | Bar Chart & Pie Chart Analytics |
| Stripe.js | Payment Integration |
| Axios | API Calls |
| React Router | Client-side Routing |
 
---
 
## ✨ Features
 
### 👤 Guest / User Side
- Secure **Login & Registration**
- Role-based UI (**GUEST / HOTEL_MANAGER**)
- Smart **hotel search** by location, dates, and guest count
- Hotel and room listings with amenities, pricing, and images
- Complete **booking flow** with Stripe payment checkout
- **Booking history** — view all past and upcoming bookings
- **Profile management** — update name, DOB, gender
- **Co-Traveler management** — add, update, and remove travelers for group bookings
 
### 🏨 Hotel Manager Side
- **Your Hotels** dashboard — view and manage all owned hotels
- Create and manage **room types** with amenities (AC, TV, Fridge, Double Bed, etc.)
- **Room inventory management** — date-wise availability view
- **Activate / Deactivate** rooms on specific date ranges
- **Surge Factor** — increase room pricing on selected dates for peak demand
- **Admin Analytics Dashboard:**
  - Total Bookings (7 / 30 / 90 day filter)
  - Total Revenue & Avg Revenue per Booking
  - 📊 **Revenue Bar Chart** — visualize earnings over time
  - 🥧 **Booking Status Pie Chart** — breakdown by Confirmed, Pending, Cancelled, Completed
 
### 🌗 Dark & Light Mode
- Full **Dark Mode and Light Mode** support
- Auto-detects system preference, with manual toggle
 
### 📱 Responsive Design
- Fully responsive across **mobile, tablet, and desktop**
 
---
 
## 📁 Project Structure
 
```
src/
├── components/         # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── HotelCard/
│   ├── BookingForm/
│   ├── Navbar/
│   └── Dashboard/
├── pages/              # Page-level components
│   ├── HomePage/
│   ├── LoginPage/
│   ├── BookingPage/
│   ├── ProfilePage/
│   └── AdminDashboard/
├── hooks/              # Custom React hooks
├── services/           # Axios API service functions
├── utils/              # Helper functions
└── main.jsx            # App entry point
```
 
---
 
## ⚙️ Getting Started
 
### Prerequisites
- Node.js 18+
- npm or yarn
 
### Installation
 
```bash
# Clone the repository
git clone https://github.com/Chaitnya27/Airbnb-Frontend.git
 
# Navigate to the project
cd Airbnb-Frontend
 
# Install dependencies
npm install
```
 
### Environment Variables
 
Create a `.env` file in the root directory:
 
```env
VITE_API_BASE_URL=http://localhost:8080
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```
 
### Run Locally
 
```bash
npm run dev
```
 
App will be available at `http://localhost:5173`
 
### Build for Production
 
```bash
npm run build
```
 
---
 
## 🚀 Deployment
 
This project is deployed on **Vercel**.
 
The `vercel.json` is already configured for React Router (SPA) support:
 
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
 
---

## 📬 Contact
 
- 💼 [LinkedIn](https://www.linkedin.com/in/chaitnya-khedekar)
- 🌐 [Live App](https://airbnb-frontend-peach.vercel.app/)
- 💻 [Backend Repo](https://github.com/Chaitnya27/Airbnb-Backend)
 
---


 
## 🖼️ Screenshots 

![SignUp](https://github.com/user-attachments/assets/2fd83b1c-8c8b-4478-b1c2-acc17fec449e)
![Signin](https://github.com/user-attachments/assets/b58af974-5f1c-40ed-ae52-cf5a66999b81)
![Home1](https://github.com/user-attachments/assets/75da81d0-3993-4251-9a4d-c611dfbd9bfc)
![Home2](https://github.com/user-attachments/assets/4f78ec17-5d0c-4f22-83e3-1e5de348dad8)
![HotelSearch1](https://github.com/user-attachments/assets/0c148897-0362-4600-b41d-a89288a9f9e0)
![HotelSearch2](https://github.com/user-attachments/assets/1249fbb2-e08b-4c19-b3d6-6bb40ec2d4ba)
![HotelBooking1](https://github.com/user-attachments/assets/8ed3d608-592f-4d92-9bbf-dd5612127cab)
![HotelBooking2](https://github.com/user-attachments/assets/c58d96ad-5335-4f96-b93e-9fa572ed72ed)
![HotelBooking3](https://github.com/user-attachments/assets/1f72fa12-677e-496f-b240-1c7abf60a643)
![HotelBooking4](https://github.com/user-attachments/assets/436fd7f8-ca85-4bd1-b4f0-9ab116b4414c)
![BookingCheckOut-addGuest](https://github.com/user-attachments/assets/07b79bed-cbb5-48b4-a48b-4bd0774dad9c)
![BookingCheckOut](https://github.com/user-attachments/assets/04380cc1-b28a-4b3d-9c5d-164ef6dede70)
![StripePayment](https://github.com/user-attachments/assets/0af42068-bc30-4fd3-ab1b-396173abe1b9)
![Dasboard-Options](https://github.com/user-attachments/assets/1975d281-1cc0-4043-8ef2-3212f990e7d8)
![My_Profile](https://github.com/user-attachments/assets/700e2a53-4e03-49f0-8873-eeb2cc8ade63)
![Booking-Histroy](https://github.com/user-attachments/assets/60284777-88e4-4a43-9092-f7ef03ef1896)
![Co-TravellersList](https://github.com/user-attachments/assets/321479ba-8ce5-4a8c-b1de-9039781f966c)
![Admin-Hotel-Mangemnet](https://github.com/user-attachments/assets/cd815fdf-3be7-49b8-a366-3ce257290a8a)
<img width="1920" height="1080" alt="HotelRevenewOvervieww" src="https://github.com/user-attachments/assets/0e6250b4-a519-48b9-a2f0-f34a8d525fa9" />
<img width="1920" height="1080" alt="BookingOverview" src="https://github.com/user-attachments/assets/ec387425-0311-4356-b3d3-50d3c2a95ba3" />



















---
> Built with ❤️ using React.js + Vite
