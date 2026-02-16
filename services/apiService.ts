import { FormData } from '../types';

// This service simulates interaction with a Laravel Backend (e.g., Sanctum/API routes)
export const apiService = {
  submitContactForm: async (data: FormData): Promise<{ success: boolean; message: string }> => {
    console.log("Sending data to Laravel API endpoint: /api/contact", data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock response
    return { success: true, message: "Información enviada correctamente. Pronto nos contactaremos." };
  },

  submitEnrollment: async (data: any): Promise<{ success: boolean; message: string }> => {
    console.log("Sending data to Laravel API endpoint: /api/enroll", data);
    await new Promise(resolve => setTimeout(resolve, 2000));
    return { success: true, message: "Pre-inscripción realizada con éxito." };
  }
};