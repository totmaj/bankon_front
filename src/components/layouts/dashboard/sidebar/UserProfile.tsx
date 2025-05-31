const UserProfile: React.FC = () => {
  return (
    <div className="flex items-center pl-6 pt-6 space-x-4">
      <img
        src="http://banks.trade/monitoring/img/rose.jpg"
        alt="User Avatar"
        className="w-10 h-10 rounded-full"
      />
      <div>
        <h2 className="text-white font-bold">Rose</h2>
        <p className="text-light">Admin</p>
      </div>
    </div>
  );
};
export default UserProfile;
