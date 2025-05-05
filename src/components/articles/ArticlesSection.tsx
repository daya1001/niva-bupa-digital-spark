
import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "5 Digital Marketing Trends for Insurance Agents in 2023",
    excerpt: "Discover the latest digital marketing strategies that are transforming how insurance agents connect with clients.",
    date: "Aug 15, 2023",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Digital Marketing",
  },
  {
    id: 2,
    title: "How to Create Engaging Social Media Content for Insurance Products",
    excerpt: "Learn practical tips to create compelling content that resonates with your audience and drives engagement.",
    date: "Sep 22, 2023",
    imageUrl: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Social Media",
  },
  {
    id: 3,
    title: "Leveraging WhatsApp Business for Insurance Client Communication",
    excerpt: "Explore how WhatsApp Business can transform your client communication and boost your insurance sales.",
    date: "Oct 10, 2023",
    imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Client Communication",
  },
];

const ArticlesSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-nibp-blue">Latest Articles</h2>
        <p className="text-gray-600 text-center mb-10">Insights and tips from our digital marketing experts</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-nibp-blue/10 text-nibp-blue text-xs px-3 py-1 rounded-full">{article.category}</span>
                  <div className="flex items-center ml-auto text-gray-500 text-xs">
                    <CalendarIcon size={14} className="mr-1" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <Button variant="outline" className="w-full">Read Article</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="default" className="bg-nibp-blue hover:bg-nibp-lightblue">View All Articles</Button>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
