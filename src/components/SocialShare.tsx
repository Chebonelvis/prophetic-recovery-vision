
import { Facebook, Instagram, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SocialShare = () => {
  const eventUrl = window.location.href;
  const eventTitle = "Recovery 2025 - Divine Restoration Conference";
  const eventDescription = "Join thousands for Recovery 2025 on June 8th, 2025 at Tomorrow Kenyatta Stadium, Kisumu. FREE entry!";

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const twitterText = `${eventTitle} - ${eventDescription} #Recovery2025 #PropheticStrategy #DivineRestoration`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(eventUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const shareOnInstagram = () => {
    // Instagram doesn't support direct sharing via URL, so we'll copy to clipboard
    navigator.clipboard.writeText(`${eventTitle}\n\n${eventDescription}\n\n${eventUrl}\n\n#Recovery2025 #PropheticStrategy #DivineRestoration`);
    toast.success("Event details copied to clipboard! You can now paste and share on Instagram.");
  };

  const copyToClipboard = () => {
    const shareText = `${eventTitle}\n\n${eventDescription}\n\n${eventUrl}`;
    navigator.clipboard.writeText(shareText);
    toast.success("Event link copied to clipboard!");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Share Recovery 2025
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Invite others to experience divine restoration and prophetic breakthrough
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={shareOnFacebook}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
            >
              <Facebook className="h-5 w-5" />
              <span>Share on Facebook</span>
            </Button>

            <Button
              onClick={shareOnTwitter}
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>Share on X</span>
            </Button>

            <Button
              onClick={shareOnInstagram}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
            >
              <Instagram className="h-5 w-5" />
              <span>Share on Instagram</span>
            </Button>

            <Button
              onClick={copyToClipboard}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
            >
              <Share2 className="h-5 w-5" />
              <span>Copy Link</span>
            </Button>
          </div>

          <div className="text-center">
            <p className="text-gray-300 text-sm">
              Help us reach thousands who need to experience divine recovery
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-yellow-400 font-semibold text-sm">
              <span>#Recovery2025</span>
              <span>#PropheticStrategy</span>
              <span>#DivineRestoration</span>
              <span>#KingdomBreakthrough</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialShare;
