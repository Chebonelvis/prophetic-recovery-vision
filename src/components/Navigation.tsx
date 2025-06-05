
import UserMenu from './UserMenu';

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          Recovery 2025
        </div>
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navigation;
