
import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { FiTrash2, FiPlus } from 'react-icons/fi'
import MeindicaDb from '../../db/MeindicaDb'

import '../sharedIndicacao.css'
import BadgeList from '../../components/BadgeList/BadgeList'

let image = null;

function Meindica() {
  let locStorage = JSON.parse(localStorage.getItem('localStorage_MeIndica')) ? JSON.parse(localStorage.getItem('localStorage_MeIndica')) : [];
  console.log(locStorage);
  const [localStorageList, setLocalStorageList] = useState(locStorage)

  const getMeindicaList = () => {
    console.log('storage: ' + localStorageList);
    return MeindicaDb().concat(localStorageList);
  }

  const [meindicaList, setMeindicaList] = useState(getMeindicaList)


  const [userName, setUserName] = useState('')
  const [descricao, setDescricao] = useState('')
  const [experience, setExperience] = useState('')
  const [portifolio, setPortifolio] = useState('')
  const [contato, setContato] = useState('')

  function splitCommas(text) {
    return text.replaceAll(', ', ',').split(',');
  }

  function handleCreateNewItem() {
    const item = {
      id: meindicaList.length + 1,
      userName,
      descricao: splitCommas(descricao),
      experience: splitCommas(experience),
      portifolio,
      contato,
      date: new Date().toISOString()
    }
    if (!userName || !descricao || !experience || !portifolio || !contato) {
      return;
    }

    setMeindicaList([...meindicaList, item])
    setLocalStorageList([...localStorageList, item]);
    console.log(item);
    console.log(localStorage.getItem('localStorage_MeIndica'));
    // setNewItem('')
  }

  function handleRemoveItem(id) {
    const itemsFiltered = meindicaList.filter(item => item.id !== id)
    setMeindicaList(itemsFiltered)
  }

  useEffect(() => {
    localStorage.setItem('localStorage_MeIndica', JSON.stringify(localStorageList));
  }, [localStorageList])


  return (
    <div className="page-content">
      <Header
        image={image}
        description="algo"
      >
        Sua empresa possui vagas abertas?<br/>
        Indique alguém da nossa lista!
      </Header>
      <main>

        <section className="new-item-section">
          <details className="group-collapsable">
            <summary>
              Quero receber indicações
            </summary>
            <div className="input-container">
              <div>
                <label htmlFor="userName">Nome completo</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Nome completo"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
              </div>
              <div>
                <label htmlFor="descricao">Descrição</label>
                <input
                  type="text"
                  name="descricao"
                  placeholder="Descrição"
                  onChange={(e) => setDescricao(e.target.value)}
                  value={descricao}
                />
              </div>
              <div>
                <label htmlFor="experience">Experiência</label>
                <input
                  type="text"
                  name="experience"
                  placeholder="Experiência"
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                />
              </div>
              <div>
                <label htmlFor="portifolio">Link para portifolio/currículo</label>
                <input
                  type="text"
                  name="portifolio"
                  placeholder="Link para portifolio/currículo"
                  onChange={(e) => setPortifolio(e.target.value)}
                  value={portifolio}
                />
              </div>
              <div>
                <label htmlFor="contato">Contato</label>
                <input
                  type="text"
                  name="contato"
                  placeholder="Contato"
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

        <section className="list-item-section">
          <details className="group-collapsable">
            <summary>
              {meindicaList.length || 0} vagas no total
            </summary>
            <div className="list">
              <ul className="list-items">
                {
                  meindicaList.map(item => {
                    return (
                      <li key={item.id} className="meindica-item listing-item">
                        <div>
                          <div className="name-date-group">
                            <h5>{item.userName}</h5>
                            <BadgeList outlined="true" items={item.experience}></BadgeList>
                          </div>
                          <div className='listing-item-skills'>
                            <span className="label">Skills</span>
                            <BadgeList items={item.descricao}></BadgeList>
                          </div>
                          <div className='listing-item-port-cont'>
                            <div>
                              <a href={item.portifolio}>Portifolio/Currículo</a>
                              <a href={'mailto:' + item.contato}>{item.contato}</a>
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

export default Meindica
