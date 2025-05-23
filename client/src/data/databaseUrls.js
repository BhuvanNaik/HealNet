// Mock data for frontend development
export const mockData = {
  auth: {
    login: {
      token: 'mock-token',
      user: {
        id: 1,
        name: 'Test User',
        email: 'test@example.com',
        role: 'user'
      }
    },
    register: {
      success: true,
      message: 'Registration successful'
    },
    profile: {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      role: 'user',
      appointments: []
    }
  },
  hospitals: {
    all: [
      {
        id: 1,
        name: 'City Hospital',
        address: '123 Main St',
        specializations: ['General', 'Cardiology'],
        rating: 4.5
      },
      {
        id: 2,
        name: 'Community Medical Center',
        address: '456 Oak Ave',
        specializations: ['Pediatrics', 'Orthopedics'],
        rating: 4.2
      }
    ],
    appointments: [
      {
        id: 1,
        hospitalId: 1,
        patientName: 'John Doe',
        date: '2024-03-20',
        time: '10:00 AM',
        status: 'confirmed'
      }
    ]
  }
};

// Export mock data as the main export
export const databaseUrls = mockData;
