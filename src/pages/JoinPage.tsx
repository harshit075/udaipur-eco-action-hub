import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db } from "@/lib/firebase"
import { useNavigate, useLocation } from "react-router-dom"
import { doc, setDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react' // <--- Import useEffect
import { toast } from 'sonner'
import Navbar from "@/components/Navbar"
import { useAuth } from "@/contexts/AuthContext" // <--- Import useAuth

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
  const from = location.state?.from?.pathname || "/"; // Redirect to home or dashboard after login

  // --- GET THE CURRENT USER STATUS ---
  const { currentUser, loading: authLoading } = useAuth();

  const signUpForm = useForm<SignUpFormValues>({ resolver: zodResolver(signUpSchema) });
  const loginForm = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  // --- THIS IS THE KEY TO THE FIX ---
  // This effect runs whenever the user's auth status changes.
  useEffect(() => {
    // If the authentication check is still loading, do nothing yet.
    if (authLoading) return;
    
    // If auth check is done AND there's a logged-in user, redirect them away.
    if (currentUser) {
      navigate(from, { replace: true });
    }
  }, [currentUser, authLoading, navigate, from]);

  const onSignUp = async (data: SignUpFormValues) => {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      
      await updateProfile(user, { displayName: data.name });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: data.name,
        email: data.email,
        createdAt: new Date(),
        role: "member",
      });
      
      toast.success(`Welcome, ${data.name}!`, { description: "Your account has been created." });
      // We no longer need to navigate here; the useEffect will handle it.
    } catch (error: any) {
      const message = error.code === 'auth/email-already-in-use' 
        ? 'This email is already in use.' 
        : 'Failed to create account.';
      toast.error(message, { description: error.message });
      setIsLoading(false); // Only set loading to false on error
    } 
    // No finally block needed, as success is handled by useEffect navigation.
  };

  const onLogin = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Welcome back!", { description: "You are now logged in." });
      // We no longer need to navigate here; the useEffect will handle it.
    } catch (error: any) {
      toast.error("Login Failed", { description: "Please check your email and password." });
      setIsLoading(false); // Only set loading to false on error
    }
    // No finally block needed, as success is handled by useEffect navigation.
  };
  
  // Don't render the form at all if the auth status is loading or if the user is already logged in
  // This prevents any flash of the form. A simple spinner is better.
  if (authLoading || currentUser) {
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
        {/* BACKGROUND VIDEO EFFECT */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30 dark:opacity-20">
            <source src="https://player.vimeo.com/external/394079206.sd.mp4?s=5ed9628c5b3afd19f7ae80ea3e0b6b88b52f8c95&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>

        {/* AUTHENTICATION FORM */}
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
                  <CardDescription>
                    Become part of the solution for a greener Udaipur.
                  </CardDescription>
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
                  <CardDescription>
                    Log in to continue your journey with us.
                  </CardDescription>
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
  )
}

export default JoinPage;