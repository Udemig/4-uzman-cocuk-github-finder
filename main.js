const searchInput = document.getElementById("search");
const button = document.getElementById("search-btn");
const profileArea = document.getElementById("profile");

const showProfile = (user) => {
  console.log(user);
  profileArea.innerHTML = `
    <div class="row border p-3">
        <div class="col-md-3">
        <img
            src="${user.avatar_url}"
            alt=""
            class="img-fluid shadow rounded"
        />
        <a href="${user.html_url}" class="btn btn-primary my-4 w-100">Profili Göster</a>
        </div>
        <div class="col-md-9">
        <span class="badge mt-1 bg-primary">Açık Repolar: ${user.public_repos}</span>
        <span class="badge mt-1 bg-secondary">Açık Gistler: ${user.public_gists}</span>
        <span class="badge mt-1 bg-success">Takipçiler: ${user.followers}</span>
        <span class="badge mt-1 bg-info">Takip Edilenler: ${user.following} </span>

        <ul class="list-group my-5">
            <li class="list-group-item">Hakkında: ${user.bio}</li>
            <li class="list-group-item">Şirket: ${user.company}</li>
            <li class="list-group-item">Website: ${user.blog}</li>
            <li class="list-group-item">Konum: ${user.location}</li>
            <li class="list-group-item">
            Hesap Oluşturma Tarihi: ${user.created_at}
            </li>
        </ul>
        </div>
    </div>
    `;
};

const getUser = async (user) => {
  // inputtan gelen usera göre apiye istek atma
  const profileRes = await fetch(`https://api.github.com/users/${user}`);
  // gelen cevabı işle
  const data = await profileRes.json();
  // datayı dışarıya aktarma
  showProfile(data);
};

const getInput = () => {
  const value = searchInput.value;
  if (value === "") {
    console.log("input içerisi boş");
    return;
  }
  getUser(value);
};

button.addEventListener("click", getInput);
