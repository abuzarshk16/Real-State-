import { Property, Testimonial, TeamMember } from './types';

export const COMPANY_INFO = {
  name: "Bell Homes Ltd",
  address: "12 Electric Parade, Seven Kings, Ilford IG3 8BY",
  phone: "020 8597 4656",
  email: "info@bellhomes.co.uk",
  hours: "Mon-Fri: 9am - 6pm | Sat: 10am - 4pm"
};

export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Luxury 4-Bed Detached House",
    address: "The Drive, Ilford, IG1",
    price: 850000,
    type: "sale",
    propertyType: "House",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2200,
    description: "An immaculate detached family home situated in one of Ilford's premier roads. Recently renovated by our own construction team, featuring a bespoke open-plan kitchen and landscaped garden.",
    features: ["Newly Renovated", "Large Garden", "Garage", "En-suite Master", "Chain Free"],
    images: ["https://picsum.photos/seed/bh1/800/600", "https://picsum.photos/seed/bh1b/800/600", "https://picsum.photos/seed/bh1c/800/600"],
    isFeatured: true,
    available: true,
    dateAdded: "2023-10-01"
  },
  {
    id: "2",
    title: "Modern 2-Bed Apartment",
    address: "High Road, Seven Kings, IG3",
    price: 1600,
    type: "rent",
    propertyType: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 750,
    description: "A stunning modern apartment located minutes from Seven Kings station (Elizabeth Line). Perfect for professionals commuting to the city. Comes fully furnished with high-end appliances.",
    features: ["Elizabeth Line Access", "Balcony", "Concierge", "Underground Parking", "Furnished"],
    images: ["https://picsum.photos/seed/bh2/800/600", "https://picsum.photos/seed/bh2b/800/600"],
    isFeatured: true,
    available: true,
    dateAdded: "2023-10-05"
  },
  {
    id: "3",
    title: "Victorian Terrace Refurbishment",
    address: "Coventry Road, Ilford, IG1",
    price: 550000,
    type: "sale",
    propertyType: "House",
    bedrooms: 3,
    bathrooms: 1,
    sqft: 1100,
    description: "Charming Victorian terrace with original features. Huge potential for a loft conversion and rear extension - ask us for a construction quote today.",
    features: ["Period Features", "Extension Potential", "Close to Schools", "Garden"],
    images: ["https://picsum.photos/seed/bh3/800/600", "https://picsum.photos/seed/bh3b/800/600"],
    available: true,
    dateAdded: "2023-09-20"
  },
  {
    id: "4",
    title: "Spacious Studio Flat",
    address: "Green Lane, Goodmayes, IG3",
    price: 1100,
    type: "rent",
    propertyType: "Studio",
    bedrooms: 0,
    bathrooms: 1,
    sqft: 400,
    description: "Large studio apartment with separate kitchen area. Recently decorated and ready to move in. Includes water rates.",
    features: ["Separate Kitchen", "Recently Decorated", "Close to Shops"],
    images: ["https://picsum.photos/seed/bh4/800/600"],
    available: true,
    dateAdded: "2023-10-10"
  },
  {
    id: "5",
    title: "5-Bed Semi-Detached Family Home",
    address: "Wanstead Park Road, Ilford, IG1",
    price: 725000,
    type: "sale",
    propertyType: "House",
    bedrooms: 5,
    bathrooms: 2,
    sqft: 1800,
    description: "Extensive family home backing onto Wanstead Park. Features a large rear extension and loft conversion done by Bell Homes Construction.",
    features: ["Park Views", "Driveway", "Utility Room", "Open Plan Living"],
    images: ["https://picsum.photos/seed/bh5/800/600", "https://picsum.photos/seed/bh5b/800/600"],
    isFeatured: true,
    available: true,
    dateAdded: "2023-10-12"
  },
  {
    id: "6",
    title: "Commercial Unit / Office Space",
    address: "High Road, Ilford, IG1",
    price: 2500,
    type: "rent",
    propertyType: "Commercial",
    bedrooms: 0,
    bathrooms: 2,
    sqft: 1000,
    description: "Prime location ground floor office space. A1/A2 usage. Newly fitted kitchenette and WCs.",
    features: ["High Footfall", "Glass Frontage", "Air Conditioning"],
    images: ["https://picsum.photos/seed/bh6/800/600"],
    available: true,
    dateAdded: "2023-09-15"
  },
   {
    id: "7",
    title: "Cozy 1-Bed Flat",
    address: "Eastern Avenue, Gants Hill, IG2",
    price: 325000,
    type: "sale",
    propertyType: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 550,
    description: "Perfect first-time buy. Located right next to Gants Hill station (Central Line). Long lease remaining.",
    features: ["Central Line", "Long Lease", "Modern Bathroom"],
    images: ["https://picsum.photos/seed/bh7/800/600"],
    available: true,
    dateAdded: "2023-10-02"
  },
  {
    id: "8",
    title: "3-Bed Bungalow",
    address: "Seven Kings Road, IG3",
    price: 1800,
    type: "rent",
    propertyType: "Bungalow",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1200,
    description: "Rarely available detached bungalow. Wheelchair accessible. Large driveway for 3 cars.",
    features: ["Accessible", "Large Plot", "Quiet Road"],
    images: ["https://picsum.photos/seed/bh8/800/600"],
    available: false,
    dateAdded: "2023-08-01"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Tenant",
    text: "Bell Homes made renting so easy. They were transparent about fees and the property was immaculate when I moved in."
  },
  {
    id: 2,
    name: "Michael Adebayo",
    role: "Construction Client",
    text: "Used Bell Homes for a double-storey extension. Completed on time and within budget. The finish quality is hotel-standard."
  },
  {
    id: 3,
    name: "Raj Patel",
    role: "Landlord",
    text: "I've let my portfolio through Bell Homes for 5 years. They find great tenants and handle maintenance issues quickly."
  }
];