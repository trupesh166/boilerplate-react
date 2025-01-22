import { BPButton } from "@/components";

export const CTA = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Ready to Streamline Your Workflow?
        </h2>
        <p className="text-xl text-white mb-8">
          Join thousands of satisfied customers and take your productivity to
          the next level.
        </p>
        <BPButton size="lg" className="bg-white text-primary hover:bg-gray-100">
          Start Your Free Trial
        </BPButton>
      </div>
    </div>
  );
};
