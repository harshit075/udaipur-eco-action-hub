import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import Navbar from "@/components/Navbar"
import { useAuth } from "@/contexts/AuthContext"

const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;
type LoginFormValues = z.infer<typeof loginSchema>;

const JoinPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const from = location.state?.from?.pathname || "/";
  const { currentUser, login } = useAuth();

  const signUpForm = useForm<SignUpFormValues>({ resolver: zodResolver(signUpSchema) });
  const loginForm = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  useEffect(() => {
    if (currentUser) navigate(from, { replace: true });
  }, [currentUser, navigate, from]);

  const onSignUp = async (data: SignUpFormValues) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      login(json.token, json.user);
      toast.success(`Welcome, ${json.user.name}!`, { description: "Your account has been created." });
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Failed to create account.');
      setIsLoading(false);
    }
  };

  const onLogin = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      login(json.token, json.user);
      toast.success("Welcome back!", { description: "You are now logged in." });
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Login failed.');
      setIsLoading(false);
    }
  };

  if (currentUser) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30 dark:opacity-20">
            <source src="https://player.vimeo.com/external/394079206.sd.mp4?s=5ed9628c5b3afd19f7ae80ea3e0b6b88b52f8c95&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10">
          <Tabs defaultValue="signup" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signup">Create Account</TabsTrigger>
              <TabsTrigger value="login">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="signup">
              <Card className="bg-card/80 backdrop-blur-md">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Join the Movement</CardTitle>
                  <CardDescription>Become part of the solution for a greener Udaipur.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={signUpForm.handleSubmit(onSignUp)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your Name" {...signUpForm.register("name")} />
                      {signUpForm.formState.errors.name && <p className="text-red-500 text-xs">{signUpForm.formState.errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-signup">Email Address</Label>
                      <Input id="email-signup" type="email" placeholder="you@example.com" {...signUpForm.register("email")} />
                      {signUpForm.formState.errors.email && <p className="text-red-500 text-xs">{signUpForm.formState.errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-signup">Password</Label>
                      <Input id="password-signup" type="password" placeholder="••••••••" {...signUpForm.register("password")} />
                      {signUpForm.formState.errors.password && <p className="text-red-500 text-xs">{signUpForm.formState.errors.password.message}</p>}
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Creating Account..." : "Sign Up"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="login">
              <Card className="bg-card/80 backdrop-blur-md">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Welcome Back</CardTitle>
                  <CardDescription>Log in to continue your journey with us.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email-login">Email Address</Label>
                      <Input id="email-login" type="email" placeholder="you@example.com" {...loginForm.register("email")} />
                      {loginForm.formState.errors.email && <p className="text-red-500 text-xs">{loginForm.formState.errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-login">Password</Label>
                      <Input id="password-login" type="password" placeholder="••••••••" {...loginForm.register("password")} />
                      {loginForm.formState.errors.password && <p className="text-red-500 text-xs">{loginForm.formState.errors.password.message}</p>}
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Logging In..." : "Login"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
