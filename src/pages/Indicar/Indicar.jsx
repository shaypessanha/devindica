
import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { FiTrash2, FiPlus } from 'react-icons/fi'
import IndicarDb from '../../db/IndicarDb'

import '../sharedIndicacao.css'
import BadgeList from '../../components/BadgeList/BadgeList'

let image = null;

function Indicar() {
  let locStorage = JSON.parse(localStorage.getItem('localStorage_Indicar')) ? JSON.parse(localStorage.getItem('localStorage_Indicar')) : [];
  console.log(locStorage);
  const [localStorageList, setLocalStorageList] = useState(locStorage)

  const getIndicarList = () => {
    console.log('storage: ' + localStorageList);
    return IndicarDb().concat(localStorageList);
  }

  const [indicarList, setIndicarList] = useState(getIndicarList)


  const [userName, setUserName] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [vagaTitle, setVagaTitle] = useState('')
  const [vagaLink, setVagaLink] = useState('')
  const [techList, setTechList] = useState('')
  const [experience, setExperience] = useState('')
  const [contato, setContato] = useState('')

  function splitCommas(text) {
    return text.replaceAll(/(,|;) /g, ',').split(',');
  }

  function handleCreateNewItem() {
    const item = {
      id: indicarList.length + 1,
      userName,
      empresa,
      vagaTitle,
      vagaLink,
      techList: splitCommas(techList),
      experience: splitCommas(experience),
      contato,
      date: new Date().toISOString()
    }
    if (!userName || !empresa || !vagaTitle || !vagaLink || !techList || !experience || !contato) {
      return;
    }

    setIndicarList([...indicarList, item])
    setLocalStorageList([...localStorageList, item]);
    console.log(item);
    console.log(localStorage.getItem('localStorage_Indicar'));
    // setNewItem('')
  }

  useEffect(() => {
    localStorage.setItem('localStorage_Indicar', JSON.stringify(localStorageList));
  }, [localStorageList])


  return (
    <div className="page-content">
      <Header
        image={image}
        description="algo"
      >
        Encontre vagas para receber indicação
      </Header>

      <main>

        <section className="new-item-section">
          <details className="group-collapsable">
            <summary>
              Registre uma vaga com indicação
            </summary>
            <div className="input-container">
              <div>
                <label htmlFor="userName">Seu nome</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Seu nome"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
              </div>
              <div>
                <label htmlFor="empresa">Nome da empresa</label>
                <input
                  type="text"
                  name="empresa"
                  placeholder="{reprograma}"
                  onChange={(e) => setEmpresa(e.target.value)}
                  value={empresa}
                />
              </div>
              <div>
                <label htmlFor="vagaTitle">Titulo da vaga</label>
                <input
                  type="text"
                  name="vagaTitle"
                  placeholder="Full Stack Dev Jr"
                  onChange={(e) => setVagaTitle(e.target.value)}
                  value={vagaTitle}
                />
              </div>
              <div>
                <label htmlFor="vagaLink">Link ou código da vaga</label>
                <input
                  type="text"
                  name="vagaLink"
                  placeholder="Link/código"
                  onChange={(e) => setVagaLink(e.target.value)}
                  value={vagaLink}
                />
              </div>
              <div>
                <label htmlFor="techList">Tecnologias</label>
                <input
                  type="text"
                  name="techList"
                  placeholder="Tecnologias"
                  onChange={(e) => setTechList(e.target.value)}
                  value={techList}
                />
              </div>
              <div>
                <label htmlFor="experience">Nivel de experiência da vaga</label>
                <input
                  type="text"
                  name="experience"
                  placeholder="Estágio, Jr, Pleno etc."
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                />
              </div>
              <div>
                <label htmlFor="contato">Seu contato</label>
                <input
                  type="text"
                  name="contato"
                  placeholder="seu.contato@email.com"
                  onChange={(e) => setContato(e.target.value)}
                  value={contato}
                />
              </div>
              <div className="add-container">
                <button
                  className="add-task"
                  type="submit"
                  onClick={handleCreateNewItem}
                >
                  Publicar
                </button>
              </div>
            </div>
          </details>
        </section>

        <section className="list-items-section">
          <details className="group-collapsable">
            <summary>
              {indicarList.length || 0} vagas no total
            </summary>
            <div className="list">
              <ul className="list-items">
                {
                  indicarList.map(item => {
                    return (
                      <li key={item.id} className="indicar-item listing-item">
                        <div>
                          <div className="name-date-group">
                            <h5>{item.vagaTitle}</h5>
                            <BadgeList outlined="true" items={item.experience}></BadgeList>
                          </div>
                          <div>
                            <span className="label">empresa: </span>
                            <span className='bold font-small-xx'>{item.empresa}</span>
                          </div>
                          <div>
                            <span className="label">por: </span>
                            <span className='bold font-small-xx'>{item.userName}</span>
                          </div>
                          <div>
                            <span className="font-small-xx">tecnologias: </span>
                            <BadgeList outlined="false" items={item.techList}></BadgeList>
                          </div>
                          <div className='listing-item-port-cont'>
                            <div>
                              <a href={item.vagaLink}>ver vaga</a>
                              <a href={'mailto:' + item.contato}>contato</a>
                            </div>
                            <h6>{new Date(item.date).toLocaleString('pt-BR')}</h6>
                          </div>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </details>
        </section>

      </main>

    </div>

  )
}

export default Indicar
