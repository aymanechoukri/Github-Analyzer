import {
  FiBookOpen,
  FiStar,
  FiGitBranch,
  FiExternalLink,
} from "react-icons/fi";

export default function RepoCard({ repo }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          <FiBookOpen />
          {repo.name}
        </h3>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-black"
        >
          <FiExternalLink />
        </a>
      </div>

      <p className="mt-3 text-sm text-gray-600">
        {repo.description || "No description available."}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500">
        <span>{repo.language || "Unknown"}</span>

        <span className="flex items-center gap-1">
          <FiStar />
          {repo.stargazers_count}
        </span>

        <span className="flex items-center gap-1">
          <FiGitBranch />
          {repo.forks_count}
        </span>
      </div>

      <p className="mt-4 text-xs text-gray-400">
        Updated {new Date(repo.updated_at).toLocaleDateString()}
      </p>
    </div>
  );
}
