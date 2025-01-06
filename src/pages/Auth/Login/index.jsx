import { BPButton } from "@/components";

export const Login = () => {
  const handleSubmit = (e) => {};
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            {/* <Label htmlFor="email">Email</Label> */}
            {/* <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /> */}
          </div>
          <div>
            {/* <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /> */}
          </div>
          <div className="flex items-center space-x-2">
            {/* <Checkbox
              id="rememberMe"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked)}
            />
            <Label
              htmlFor="rememberMe"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </Label> */}
          </div>
          <BPButton type="submit" className="w-full">
            Log In
          </BPButton>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};
