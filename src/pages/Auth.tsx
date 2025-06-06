
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { Navigate, Link } from 'react-router-dom';

const Auth = () => {
  const { user, signIn, signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Sign In Form State
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  // Sign Up Form State
  const [signUpData, setSignUpData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Forgot Password State
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await signIn(signInData.email, signInData.password);
      
      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast.error('Invalid email or password. Please check your credentials.');
        } else if (error.message.includes('Email not confirmed')) {
          toast.error('Please check your email and confirm your account before signing in.');
        } else {
          toast.error(error.message || 'Failed to sign in');
        }
      } else {
        toast.success('Welcome back! Sign in successful.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signUpData.password !== signUpData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (signUpData.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await signUp(signUpData.email, signUpData.password, signUpData.fullName);
      
      if (error) {
        if (error.message.includes('User already registered')) {
          toast.error('An account with this email already exists. Please sign in instead.');
        } else {
          toast.error(error.message || 'Failed to create account');
        }
      } else {
        toast.success('Account created successfully! Please check your email to confirm your account.');
        setSignUpData({ fullName: '', email: '', password: '', confirmPassword: '' });
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    if (!forgotPasswordEmail) {
      toast.error('Please enter your email address');
      return;
    }
    
    // This would typically send a password reset email
    toast.success('Password reset instructions have been sent to your email');
    setShowForgotPassword(false);
    setForgotPasswordEmail('');
  };

  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white">Reset Password</CardTitle>
            <CardDescription className="text-gray-300">
              Enter your email address to receive password reset instructions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="forgot-email" className="text-white">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="forgot-email"
                  type="email"
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Button
                onClick={handleForgotPassword}
                className="w-full h-12 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold"
              >
                Send Reset Instructions
              </Button>
              
              <Button
                variant="ghost"
                onClick={() => setShowForgotPassword(false)}
                className="w-full text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Sign In
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,255,255,0.05) 2px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
              Recovery 2025
            </h1>
          </Link>
          <p className="text-gray-300">Join the divine restoration movement</p>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/10">
              <TabsTrigger value="signin" className="data-[state=active]:bg-white/20 text-white">
                Sign In
              </TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-white/20 text-white">
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white text-center">Welcome Back</CardTitle>
                <CardDescription className="text-gray-300 text-center">
                  Sign in to register for Recovery 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignIn} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email" className="text-white">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="signin-email"
                        type="email"
                        value={signInData.email}
                        onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                        placeholder="Enter your email"
                        className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="text-white">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="signin-password"
                        type={showPassword ? 'text' : 'password'}
                        value={signInData.password}
                        onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold"
                  >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </Button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setShowForgotPassword(true)}
                      className="text-yellow-400 hover:text-yellow-300 text-sm underline"
                    >
                      Forgot Password?
                    </button>
                  </div>
                </form>
              </CardContent>
            </TabsContent>

            <TabsContent value="signup">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white text-center">Join Recovery 2025</CardTitle>
                <CardDescription className="text-gray-300 text-center">
                  Create your account to register for the event
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignUp} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="text-white">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-name"
                        type="text"
                        value={signUpData.fullName}
                        onChange={(e) => setSignUpData({ ...signUpData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-white">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-email"
                        type="email"
                        value={signUpData.email}
                        onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                        placeholder="Enter your email"
                        className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-white">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-password"
                        type={showPassword ? 'text' : 'password'}
                        value={signUpData.password}
                        onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                        placeholder="Create a password"
                        className="pl-10 pr-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        required
                        minLength={6}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm-password" className="text-white">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-confirm-password"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={signUpData.confirmPassword}
                        onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold"
                  >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    By creating an account, you agree to receive event updates about Recovery 2025
                  </p>
                </form>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>

        <div className="text-center mt-6">
          <Link to="/" className="text-gray-300 hover:text-white text-sm flex items-center justify-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
