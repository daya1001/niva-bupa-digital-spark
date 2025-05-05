
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import Logo from '../components/navbar/Logo';

const Login = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you'd validate credentials against your backend
    
    // For demo purposes, we'll just simulate a successful login
    if (email && password) {
      toast({
        title: "Login Successful",
        description: "Redirecting to your dashboard..."
      });
      
      // Simulate redirect after a short delay
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter your email and password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side: Image */}
      <div className="hidden lg:block lg:w-1/2 bg-nibp-blue">
        <div className="h-full flex items-center justify-center p-12">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold text-white mb-6">Welcome to NIVA BUPA Digital Academy</h2>
            <p className="text-blue-100 text-lg mb-8">
              Enhance your digital marketing skills and grow your insurance business with our specialized courses.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl mb-2">
                    {['📱', '💬', '✍️', '🌐', '🎬', '🤝'][i-1]}
                  </div>
                  <div className="text-white font-medium text-sm">
                    {[
                      'Digital Marketing',
                      'WhatsApp Marketing',
                      'Content Creation',
                      'Social Media',
                      'YouTube Power',
                      'Lead Conversion'
                    ][i-1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side: Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="inline-block mb-6">
              <Logo />
            </div>
            <h2 className="text-2xl font-bold mb-1">Sign In to Your Account</h2>
            <p className="text-gray-600">
              New here? <Link to="/" className="text-nibp-blue hover:underline">Register now</Link>
            </p>
          </div>
          
          <Tabs defaultValue="employee" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="employee">Employee</TabsTrigger>
              <TabsTrigger value="agent">Niva Bupa Agent</TabsTrigger>
              <TabsTrigger value="external">External Agent</TabsTrigger>
            </TabsList>
            
            <TabsContent value="employee" className="mt-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="your.name@nivabupa.com" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-nibp-blue hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input 
                    id="password"
                    type="password" 
                    placeholder="••••••••" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full bg-nibp-blue hover:bg-nibp-lightblue">
                  Sign In
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="agent" className="mt-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="agent-email">Email</Label>
                  <Input 
                    id="agent-email"
                    type="email" 
                    placeholder="your.email@example.com" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="agent-password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-nibp-blue hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input 
                    id="agent-password"
                    type="password" 
                    placeholder="••••••••" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full bg-nibp-blue hover:bg-nibp-lightblue">
                  Sign In
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="external" className="mt-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="external-email">Email</Label>
                  <Input 
                    id="external-email"
                    type="email" 
                    placeholder="your.email@example.com" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="external-password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-nibp-blue hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input 
                    id="external-password"
                    type="password" 
                    placeholder="••••••••" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full bg-nibp-blue hover:bg-nibp-lightblue">
                  Sign In
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              Or continue with
            </p>
            <div className="flex justify-center space-x-4">
              <SocialButton type="google" />
              <SocialButton type="facebook" />
              <SocialButton type="apple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type SocialButtonProps = {
  type: 'google' | 'facebook' | 'apple';
};

const SocialButton = ({ type }: SocialButtonProps) => {
  return (
    <Button 
      variant="outline" 
      className="w-12 h-12 rounded-full p-0 flex items-center justify-center"
    >
      {type === 'google' && <GoogleIcon />}
      {type === 'facebook' && <FacebookIcon />}
      {type === 'apple' && <AppleIcon />}
    </Button>
  );
};

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path 
      fill="#4285F4" 
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" 
    />
    <path 
      fill="#34A853" 
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" 
    />
    <path 
      fill="#FBBC05" 
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" 
    />
    <path 
      fill="#EA4335" 
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path 
      fill="#1877F2" 
      d="M24 12.073c0-5.8-4.2-10.5-9.998-10.997v.023C13.355 1.037 12.688 1 12 1 5.925 1 1 5.925 1 12c0 5.591 4.181 10.205 9.58 10.913v-7.725H7.854v-3.188h2.726V9.569c0-2.692 1.607-4.174 4.052-4.174 1.172 0 2.39.209 2.39.209v2.63h-1.347c-1.318 0-1.733.82-1.733 1.666v2.001h2.954l-.473 3.188H13.94V22.9c5.624-.666 10.06-5.388 10.06-11.077v-.113c0 .037 0 .074.001.112-.001-.038-.001-.075-.001-.113z" 
    />
  </svg>
);

const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path 
      fill="#000"
      d="M17.05 20.28a9.345 9.345 0 0 1-.93.44 14.255 14.255 0 0 1-1.86.6c-.67.16-1.42.24-2.26.24-1.16 0-2.12-.33-2.88-.98-.76-.65-1.14-1.49-1.14-2.5 0-.95.3-1.73.89-2.35.59-.62 1.4-.93 2.42-.93.25 0 .5.02.75.06.25.04.56.11.93.21v-4.14c0-1.29.23-2.43.69-3.43.46-.99 1.14-1.75 2.05-2.31.9-.55 2.01-.83 3.33-.83.43 0 .84.03 1.23.08s.72.12 1 .19v2.89c0 .55-.23.99-.68 1.32-.46.33-1.02.5-1.7.5-.68 0-1.25-.17-1.7-.49-.46-.33-.69-.77-.69-1.33V3.36c-.19-.02-.36-.03-.51-.03-.83 0-1.48.19-1.91.56-.44.37-.76.9-.98 1.57-.21.67-.32 1.49-.32 2.47v4.55l2.92.93c.34.11.62.26.83.44.21.18.31.46.31.83v3.42c0 .54-.12.98-.37 1.32-.24.34-.53.61-.86.82-.33.2-.64.31-.93.34zm-.16-.96c.45-.28.67-.66.67-1.12v-2.33l-3.02-.96c-.39-.13-.69-.3-.91-.51-.21-.21-.32-.5-.32-.88V8.8c0-.22.05-.41.16-.56.1-.15.26-.26.47-.32.22-.06.49-.09.83-.09 1.12 0 2.04-.29 2.74-.88.71-.58 1.06-1.4 1.06-2.44-.61-.09-1.19-.14-1.76-.14-1.94 0-3.41.57-4.42 1.7-1.01 1.13-1.51 2.78-1.51 4.95v4.21c0 1.19-.24 2.09-.72 2.69-.48.61-1.08.91-1.8.91-.73 0-1.33-.3-1.81-.91-.47-.61-.71-1.5-.71-2.69 0-.54.05-1.01.15-1.41.1-.4.26-.77.49-1.1.22-.34.52-.63.89-.88.37-.25.83-.43 1.38-.56l.15 1.12c-.35.08-.64.18-.85.29-.21.11-.39.27-.52.47-.13.2-.23.42-.29.68-.06.26-.09.58-.09.96 0 .73.09 1.28.28 1.66.18.38.44.56.76.56.33 0 .59-.19.77-.56.19-.37.28-.93.28-1.66v-.24l.05-1.9.05-4.79c0-1.3.26-2.44.77-3.4.52-.96 1.31-1.7 2.36-2.2 1.06-.5 2.38-.75 3.95-.75.3 0 .64.02 1.02.05.38.03.78.09 1.19.17v1.07c0 .78.19 1.4.57 1.84.38.44.92.67 1.62.67.69 0 1.23-.22 1.62-.67.38-.44.57-1.06.57-1.84V3.96c-.19-.05-.43-.1-.73-.14-.3-.04-.62-.06-.94-.06-1.28 0-2.33.29-3.14.88-.81.58-1.41 1.36-1.78 2.34-.38.98-.56 2.07-.56 3.27v4.04c0 .33-.11.62-.33.87-.22.25-.56.44-1.02.56l-.15-1.06c.36-.08.65-.2.85-.36.2-.16.3-.41.3-.75V10h-.55c-.21 0-.42-.01-.61-.03-.19-.02-.35-.04-.45-.06v-.21c.09 0 .2-.01.35-.02.14-.01.32-.02.54-.02h.72v-.45c0-1.19.14-2.19.42-2.98.28-.8.68-1.4 1.2-1.82.52-.41 1.15-.62 1.88-.62.15 0 .27.01.36.03v4.71c-.2-.06-.39-.11-.58-.15-.19-.04-.4-.06-.63-.06-.67 0-1.19.2-1.59.6-.39.4-.59.97-.59 1.7 0 .77.24 1.34.72 1.72.48.38 1.1.56 1.86.56.32 0 .62-.03.92-.09.3-.06.57-.13.83-.21v.78c-.28.07-.53.12-.77.17-.24.04-.45.07-.65.09-.2.02-.35.03-.45.03-1.07 0-1.92-.2-2.55-.61-.63-.41-.94-.99-.94-1.75 0-.33.07-.64.22-.93.15-.29.39-.52.74-.7.34-.18.81-.27 1.4-.27.23 0 .46.01.67.04.21.03.43.07.66.13v-5.31c0-1.5.26-2.79.77-3.88.52-1.08 1.29-1.92 2.32-2.5 1.03-.58 2.32-.87 3.87-.87.4 0 .82.03 1.27.08.45.05.86.13 1.25.22v2.93c0 1.07-.35 1.93-1.04 2.58-.7.65-1.62.98-2.76.98-.52 0-.98-.06-1.39-.18a3.8 3.8 0 0 1-1.1-.52v5.55c0 .23-.04.42-.11.59-.08.16-.19.29-.33.37-.14.09-.31.13-.51.13h-1.41v.88c0 .65-.1 1.23-.29 1.75-.19.52-.47.92-.84 1.22zm-5.86-10.7c-.03.07-.08.13-.16.16-.08.03-.18.05-.31.05h-1.04l.05 7.18c0 .46-.01.89-.03 1.28-.02.4-.04.74-.06 1.03.29-.05.55-.12.77-.22.22-.09.38-.27.49-.54.11-.27.16-.66.16-1.17l-.08-4.69c0-.38.09-.66.26-.83.18-.17.4-.26.66-.26.17 0 .32.02.47.07l-.15.8-.33-.15c-.13.08-.2.25-.23.52-.03.26-.05.63-.05 1.11v1.5c0 .64.16 1.12.47 1.44.31.32.74.48 1.31.48.7 0 1.24-.3 1.61-.89.37-.59.55-1.39.55-2.39V6.65c0-.2.01-.4.04-.6.03-.2.06-.36.09-.47-.44.11-.83.34-1.15.68-.33.34-.57.8-.74 1.38-.16.58-.24 1.28-.24 2.1v4.17c0 .25-.01.48-.04.7-.02.22-.06.41-.11.58.22-.09.4-.2.53-.34.13-.14.2-.37.2-.68l-.03-2.87c0-.36.08-.63.23-.82.16-.19.35-.28.59-.28.13 0 .28.03.43.08l-.13.77c-.17-.09-.26.01-.28.32-.02.31-.03.76-.03 1.36v.37c0 .71.16 1.24.49 1.6.33.36.77.54 1.33.54.69 0 1.25-.27 1.68-.82.43-.55.64-1.29.64-2.21V7.51c-.29.11-.5.23-.66.36s-.25.27-.28.43c-.03.16-.05.4-.05.72v1.53c0 .37.02.69.07.97.05.28.15.52.32.74l-.75.44c-.15-.32-.24-.64-.29-.97-.05-.33-.08-.74-.08-1.25V7.96c0-.35.09-.63.26-.83.18-.2.42-.36.73-.46l.18.93c.13-.06.22-.15.27-.25.05-.11.08-.3.08-.57v-.82c-.33 0-.6-.03-.82-.08-.22-.05-.4-.1-.55-.16v-.06c.08.02.15.03.22.04s.15.02.23.03c.08.01.16.01.25.01.13 0 .29 0 .48-.01s.38-.01.57-.01h.24c.8 0 1.41-.1 1.83-.31.43-.21.64-.53.64-.98 0-.34-.16-.64-.48-.89-.32-.25-.74-.44-1.26-.57-.52-.13-1.07-.19-1.65-.19-.7 0-1.4.07-2.11.21-.7.14-1.31.32-1.84.55-.52.23-.79.49-.8.77h-.22c.02-.18.16-.36.44-.56.27-.2.63-.37 1.06-.52.44-.16.91-.29 1.43-.39.52-.1 1.02-.15 1.49-.15.56 0 1.1.05 1.63.14.52.1 1 .24 1.35.43.36.19.58.42.66.69.03.1.05.21.05.33 0 .2-.05.38-.14.55-.09.17-.24.33-.43.47s-.44.27-.73.37c-.3.1-.63.19-1.01.25-.38.06-.8.1-1.27.12v.32c0 .74-.25 1.34-.74 1.8-.49.46-1.18.69-2.08.69h-.25a.884.884 0 0 0-.12-.01zm4.4-.21h-.26v-.08c0-.4.17-.6.51-.6.15 0 .29.03.4.09l-.16.66c-.09-.05-.2-.07-.32-.07h-.17z" 
    />
  </svg>
);

export default Login;
