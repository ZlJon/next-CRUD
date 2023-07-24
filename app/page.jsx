import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl">Home Page</h1>
      <p className="py-10">
        This is our home page. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perferendis vel unde expedita necessitatibus non sint
        ducimus rerum, voluptate enim totam at ratione temporibus ipsam, ut,
        aliquid recusandae sapiente quisquam autem. Exercitationem quo
        praesentium quis. Fugiat consequuntur quia harum, laudantium illum
        delectus nam modi magnam assumenda quasi quidem amet deserunt placeat
        exercitationem, quas quo. Labore magnam architecto, recusandae inventore
        iste rerum. Ea reprehenderit in nesciunt nisi, mollitia maxime.
        Praesentium eaque quibusdam, eos quo, harum corrupti, neque architecto
        error vero cum dolor. Nostrum quo natus quod aliquid, atque quos
        dignissimos molestias! Ut.
      </p>

      <Link href="/about">Go to About Page</Link>
    </div>
  );
};

export default HomePage;
