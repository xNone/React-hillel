import { useState, useEffect } from "react";
import { fetchPopularRepos } from "./api";
import Tabs from "./Tabs";
import Repository from "./Repository";
import { useSearchParams } from "react-router-dom";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

const Popular = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedLanguage = searchParams.get("language") || "All";

  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const handleTabClick = (language) => {
    setSearchParams({ language });
  };
  
  useEffect(() => {
    setLoading(true);

    fetchPopularRepos(selectedLanguage)
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  }, [selectedLanguage]);

  return (
    <div>
      <Tabs
        languages={languages}
        selectedLanguage={selectedLanguage}
        onTabClick={handleTabClick}
        loading={loading}
      />
      <Repository repos={repos} loading={loading} />
    </div>
  );
};

export default Popular;
