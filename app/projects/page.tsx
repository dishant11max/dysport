import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects | Dishant",
  description: "A complete archive of open-source projects, experiments, and developer tools built by Dishant.",
};

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  updated_at: string;
  stargazers_count: number;
  fork: boolean;
}

// Projects the user explicitly wants to hide from the archive
const hiddenRepos = [
  "disfolio",
  "recurrence",
  "fyp",
  "recur",
  "FinalYearProj",
  "FinalYearProject",
  "ReactProject1",
  "port.dev",
  "dishant11max",
  "laundromat-",
  "LaundroMat-Website",
  "Group",
  "assignment-2",
  "assignment-1",
  "assignment-3",
  "localrepo",
  "susu-demo",
  "gugugaga-demo"
];

// Fetch repos from GitHub API
async function getRepos() {
  const res = await fetch("https://api.github.com/users/dishant11max/repos?sort=updated&per_page=100", { 
    next: { revalidate: 3600 } // Revalidate cache every hour
  });

  if (!res.ok) {
    return [];
  }

  const repos: Repo[] = await res.json();
  // Filter out forks and hidden repos
  return repos.filter(repo => !repo.fork && !hiddenRepos.includes(repo.name));
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
    <main style={{ backgroundColor: "#F4F4F4", minHeight: "100vh" }}>
      
      <div className="max-w-[1400px] mx-auto px-[clamp(24px,5vw,80px)] pt-[clamp(120px,15vh,200px)] pb-[clamp(80px,10vh,140px)]">
        
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="max-w-[800px]">
            <h1 className="font-playfair text-[clamp(50px,8vw,80px)] leading-[0.9] tracking-[-0.04em] text-black mb-8 uppercase">
              INDEX OF WORK
            </h1>
            <p className="text-[18px] text-[#444] leading-[1.6] font-inter">
              An archive of public repositories, libraries, and experimental 
              software directly from GitHub.
            </p>
          </div>

          <div className="w-full h-[1px] bg-black/10 my-12" />

          {/* Repo List */}
          <div className="flex flex-col">
            {repos.length === 0 ? (
              <p className="text-[#444] font-inter text-[18px]">Loading projects...</p>
            ) : (
              repos.map((repo) => (
                <a 
                  key={repo.id}
                  href={repo.homepage || repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-baseline justify-between py-12 border-b border-black/10 cursor-pointer decoration-transparent"
                >
                  {/* Left: Name and subtle language */}
                  <div className="flex flex-col gap-3 md:w-1/3 pr-8">
                    <h2 className="font-playfair text-[32px] md:text-[40px] leading-[1] tracking-[-0.02em] text-black group-hover:italic transition-all duration-300">
                      {repo.name}
                    </h2>
                    {repo.language && (
                      <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-gray-400">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  
                  {/* Right: Description & Arrow */}
                  <div className="flex items-center justify-between md:w-2/3 mt-6 md:mt-0">
                    <p className="text-[16px] text-[#444] leading-[1.6] font-inter max-w-[500px]">
                      {repo.description || "No description provided."}
                    </p>
                    
                    <span className="hidden md:block opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 text-black text-xl">
                      →
                    </span>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
