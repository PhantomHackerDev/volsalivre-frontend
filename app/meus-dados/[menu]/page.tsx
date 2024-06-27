import Dashboard from "@/components/meus-dados/dashboard";

const Home = (title:any) => {
  
  const decode_title = decodeURIComponent(title.params.menu);
  
  return (
    <main className="flex min-h-screen flex-col">
      <Dashboard title_url = {decode_title} />
    </main>
  );
}

export default Home;