// Existing Project Screenshots
import rentCustomer from '../assets/r1.jpg'
import rentOwner from '../assets/r2.jpg'
import rentDetails from '../assets/r3.jpg'

import lmsLogin from '../assets/l1.jpg'
import lmsOrder from '../assets/l2.jpg'
import lmsDashboard from '../assets/l3.jpg'

export const projects = [
  {
    id: 'rent-a-car-marketplace',
    number: '01',
    title: 'Rent-a-Car Marketplace',
    tagline: 'Peer-to-Peer Car Rental Platform for Islamabad / Rawalpindi',
    description:
      'A peer-to-peer car rental marketplace for Islamabad/Rawalpindi connecting customers, vehicle owners, and administrators. Built to manage end-to-end rental workflows including car listings, detailed specifications, booking requests, owner approval processes, pre/post trip vehicle inspection documentation, and an operational administrative console powered by Firebase Authentication, Firestore, and Firebase Storage.',
    capabilities: [
      'Customer, vehicle owner, and administrator role-based workflows',
      'Car listings with photo uploads and complete specifications',
      'Booking requests with owner approval workflow',
      'Pre-trip and post-trip digital vehicle inspection records',
      'Firebase Authentication, Cloud Firestore real-time sync & Storage',
      'Responsive administrative fleet management experience',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Firebase',
      'Firestore',
      'Firebase Storage',
      'REST APIs',
    ],
    github: 'https://github.com/abdussami300-bot/Car-Rental-app',
    mainImage: rentCustomer,
    images: [
      {
        src: rentCustomer,
        label: 'Customer Dashboard',
        code: 'r1',
        description:
          'Search and browse available cars, filter by category and location, view verified ratings, and submit booking requests.',
      },
      {
        src: rentOwner,
        label: 'Owner Dashboard',
        code: 'r2',
        description:
          'Manage registered vehicles, inspect incoming rental requests, approve or decline bookings, and track fleet availability.',
      },
      {
        src: rentDetails,
        label: 'Car Details',
        code: 'r3',
        description:
          'Detailed car profile showing high-resolution images, specifications, transmission, fuel type, daily pricing, owner details, and rental terms.',
      },
    ],
  },
  {
    id: 'laundry-management-system',
    number: '02',
    title: 'Laundry Management System',
    tagline: 'Practical Mobile Laundry & Order Management Application',
    description:
      'A practical mobile laundry and order management application designed to make order processing, service intake, and workflow tracking straightforward and organized. Enables operators and customers to manage order creation, specify laundry services (wash, dry, iron), and monitor progress from initial pickup to final delivery.',
    capabilities: [
      'Secure login and authentication for clients and staff',
      'Streamlined place new order workflow with itemized service selection',
      'Operational dashboard for monitoring active orders and status updates',
      'Intuitive, responsive mobile user interface',
    ],
    technologies: ['Flutter', 'Dart', 'Responsive Design'],
    github: null,
    mainImage: lmsDashboard,
    images: [
      {
        src: lmsLogin,
        label: 'Login',
        code: 'l1',
        description:
          'Clean, secure authentication screen allowing staff and customers to log into their laundry management accounts.',
      },
      {
        src: lmsOrder,
        label: 'Place New Order',
        code: 'l2',
        description:
          'Interactive order creation interface to select laundry categories, service options, quantities, and schedule pickups.',
      },
      {
        src: lmsDashboard,
        label: 'Dashboard',
        code: 'l3',
        description:
          'Operational dashboard summarizing active orders, pending pickups, in-progress wash cycles, and completed deliveries.',
      },
    ],
  },
]
