import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Octokit } from '@octokit/rest';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const octokit = new Octokit({
  auth: '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'
});

const SearchDeveloper = () => {
  const technologies = [
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue' },
    { value: 'node', label: 'Node' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'c++', label: 'C++' },
    { value: 'c#', label: 'C#' },
    { value: 'php', label: 'PHP' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'swift', label: 'Swift' },
    { value: 'kotlin', label: 'Kotlin' },
    { value: 'go', label: 'Go' },
    { value: 'rust', label: 'Rust' },
    { value: 'scala', label: 'Scala' },
    { value: 'haskell', label: 'Haskell' },
    { value: 'elixir', label: 'Elixir' },
    { value: 'clojure', label: 'Clojure' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'sql', label: 'SQL' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'mysql', label: 'MySQL' },
    { value: 'postgresql', label: 'PostgreSQL' },
    { value: 'redis', label: 'Redis' },
    { value: 'graphql', label: 'GraphQL' },
    { value: 'docker', label: 'Docker' },
    { value: 'kubernetes', label: 'Kubernetes' },
    { value: 'aws', label: 'AWS' },
    { value: 'azure', label: 'Azure' },
    { value: 'gcp', label: 'GCP' },
    { value: 'firebase', label: 'Firebase' },
    { value: 'linux', label: 'Linux' },
    { value: 'macos', label: 'macOS' },
    { value: 'windows', label: 'Windows' },
    { value: 'android', label: 'Android' },
    { value: 'ios', label: 'iOS' },
    { value: 'flutter', label: 'Flutter' },
    { value: 'react native', label: 'React Native' },
    { value: 'ionic', label: 'Ionic' },
    { value: 'xamarin', label: 'Xamarin' },
    { value: 'unity', label: 'Unity' },
    { value: 'unreal engine', label: 'Unreal Engine' }
  ];

  const [masterDevList, setMasterDevList] = useState([]);
  const [devList, setDevList] = useState([]);

  const [location, setLocation] = useState('India');
  const [technology, setTechnology] = useState('react');

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const getReposNumber = async (username) => {
    const response = await octokit.request('GET /users/{username}/repos', {
      username: username,
      per_page: 100
    });

    return response.data.length;
  };

  const saveHistory = async (username) => {
    const res = await fetch('http://localhost:5000/history/add', {
      method: 'POST',
      body: JSON.stringify({
        user: currentUser._id,
        data: {
          location: location,
          technology: technology,
          devList: devList
        },
        createdAt: new Date()
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.status);
    if (res.status === 200) {
      toast.success('History Saved');
      console.log('History Saved');
    }
  };

  const getDevFollowers = async (username) => {
    const response = await octokit.request('GET /users/{username}/followers', {
      username: username,
      per_page: 100
    });

    return response.data.length;
  };

  const getDevCommits = async (username) => {
    const response = await octokit.request('GET /users/{username}/events', {
      username: username,
      per_page: 10000
    });

    return response.data.length;
  };

  async function getDevelopersByLocationAndTechnology() {
    const query = `${technology} location:${location}`;
    const results = [];
    let hasNextPage = true;
    // while (hasNextPage) {
    const response = await octokit.search.users({
      q: query,
      per_page: 10,
      page: 10
    });
    //   results.push(...response.data.items);
    //   hasNextPage = octokit.hasNextPage(response);
    //   page += 1;
    // }
    console.log(response.data.items);
    const promiseArray = response.data.items.map(async (dev) => {
      const reposNum = await getReposNumber(dev.login);
      const followersNum = await getDevFollowers(dev.login);
      const totalCommits = await getDevCommits(dev.login);
      return {
        login: dev.login,
        avatar_url: dev.avatar_url,
        url: dev.html_url,
        location: dev.location,
        followers: dev.followers,
        reposNum: reposNum,
        followersNum: followersNum,
        totalCommits: totalCommits
      };
    });
    Promise.all(promiseArray)
      .then((results) => {
        console.log(results);
        setDevList(results);
      })
      .catch((error) => console.error(error));
    //   console.log(octokit);
    // return results;
  }

  const devCard = (devData) => {
    if (devData !== null) {
      return (
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-3">
                <img src={devData.avatar_url} className="img-fluid" alt="" />
              </div>
              <div className="col-md-9">
                <p>
                  <strong>Username: </strong> {devData.login}
                </p>
                <p>
                  <strong>Github Repositories: </strong> {devData.reposNum}
                </p>
                <p>
                  <strong>Followers: </strong> {devData.followersNum}
                </p>
                <p>
                  <strong>Total Commits: </strong> {devData.totalCommits}
                </p>
                <div className="d-flex">
                  <Link to={'/user/devdetails/' + devData.login} className="btn btn-primary mt-4 me-2">
                    View More
                  </Link>
                  <Link to={devData.url} className="btn btn-dark mt-4 me-2">
                    &nbsp;&nbsp;<i class="fa-brands fa-github"></i> View Github Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const displayDevList = () => {
    if (devList.length === 0)
      return (
        <div>
          <img
            alt=""
            src="/developer.png"
            width={300}
            className="d-flex m-auto"
          />
          <h1 className='text-light text-center mt-3'>Click on Search Button to View Developers from Github</h1>
        </div>
      );
    return devList.map((devData) => devCard(devData));
  };

  useEffect(() => {
    // getDevelopersByLocationAndTechnology('India', 'react');
  }, []);

  return (
    <div style={{ backgroundColor: '#97c9dd', minHeight: '100vh' }}>
      <header className="header" style={{ backgroundImage: `linear-gradient(to right, #0000004f, #0000004f), url('https://wallpapercave.com/wp/wp6350571.jpg')` }}>
        <div className="container py-5">
          <p className="text-center text-white display-3 fw-bold text-dark">Search Developers</p>
          <div className="row">
            <div className="col-md-4">
              <label className="form-label text-white">Select Location</label>
              <input type="text" className="form-control" onChange={(e) => setLocation(e.target.value)} value={location} />
            </div>
            <div className="col-md-4">
              <label className="form-label text-white">Select Technology</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={technologies[0]}
                isDisabled={false}
                isLoading={false}
                isClearable={true}
                isSearchable={true}
                options={technologies}
                onChange={(e) => setTechnology(e.value)}
              />
              {/* <input
                type="text"
                className="form-control"
                onChange={(e) => setTechnology(e.target.value)}
                value={technology}
              /> */}
            </div>
            <div className="col-md-4">
              <label className="form-label text-white">Select Technology</label>
              <input type="text" className="form-control" onChange={(e) => setLocation(e.target.value)} value={location} />
            </div>
          </div>
          <button className="mt-4 btn btn-primary btn-lg w-100" onClick={getDevelopersByLocationAndTechnology}>
            <i className="fas fa-search"></i> Search{' '}
          </button>
        </div>
      </header>
      <hr />

      <div className="container">
        <button className="btn btn-primary my-3" onClick={saveHistory}>
          <i class="fa fa-history" aria-hidden="true"></i> Save History
        </button>
        {displayDevList()}
      </div>
    </div>
  );
};

export default SearchDeveloper;
