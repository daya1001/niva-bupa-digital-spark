
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const Certificates = () => {
  // Fetch certificates from Supabase
  const { data: certificates, isLoading, error } = useQuery({
    queryKey: ['certificates'],
    queryFn: async () => {
      // In a real app, we would filter by authenticated user
      const { data, error } = await supabase
        .from('achievements')
        .select(`
          *,
          courses:course_id (
            title,
            description,
            image_url
          )
        `)
        .order('issue_date', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
  });

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Certificates</h1>
          <p className="text-gray-600">View and download your earned certificates</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((_, i) => (
            <div key={i} className="bg-gray-100 animate-pulse rounded-lg h-64"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Certificates</h1>
          <p className="text-gray-600">View and download your earned certificates</p>
        </div>
        <Card className="bg-red-50 border-red-200">
          <CardContent className="pt-6">
            <p className="text-red-600">Error loading certificates. Please try again later.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // If there are no certificates yet
  if (certificates && certificates.length === 0) {
    return (
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Certificates</h1>
          <p className="text-gray-600">View and download your earned certificates</p>
        </div>
        <Card className="text-center p-8">
          <CardHeader>
            <div className="mx-auto bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mb-4">
              <Award size={36} className="text-gray-400" />
            </div>
            <CardTitle>No Certificates Yet</CardTitle>
            <CardDescription>
              Complete courses to earn certificates and track your achievements
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button variant="default" className="bg-nibp-blue hover:bg-nibp-blue/90">
              Explore Courses
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Certificates</h1>
        <p className="text-gray-600">View and download your earned certificates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates?.map((certificate) => (
          <Card key={certificate.id} className="overflow-hidden">
            <div className="relative h-40">
              <img 
                src={certificate.courses?.image_url || "/placeholder.svg"}
                alt={certificate.courses?.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 m-4">
                <div className="bg-white p-2 rounded-full shadow">
                  <Award size={24} className="text-nibp-orange" />
                </div>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle>{certificate.courses?.title || "Certificate"}</CardTitle>
              <CardDescription>{certificate.courses?.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar size={16} className="mr-2" />
                <span>Issued: {format(new Date(certificate.issue_date), 'MMMM d, yyyy')}</span>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button variant="default" className="flex items-center w-full bg-nibp-blue hover:bg-nibp-blue/90">
                <Download size={16} className="mr-2" />
                <span>Download Certificate</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
