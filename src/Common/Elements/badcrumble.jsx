import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function Badcrumble(props) {

  const [crum, setCrum] = useState({
    objArr: [],
    currentPage: {}
  });

  const nameANDpaths = [
    { alias: 'dashboard', name: 'Dashboard', path: '/dashboard' },
    { alias: 'lists', name: 'Lists', path: '/dashboard/lists' },
    { alias: 'statics', name: 'Statics', path: '/dashboard/statics' },
  ];

  useEffect(() => {
    const objArr = props?.fromTo?.map((page) =>
      nameANDpaths.find(({ alias }) => alias == page));
    const [currentPage] = objArr.splice(-1, 1)
    setCrum({ objArr, currentPage });
  }, [])


  return (<>
    <header className="p-3 pt-3 px-3 text-white">
      <ul className='flex font-bold'>
        {
          crum?.objArr?.length && crum.objArr.map((page, i) =>
          (<React.Fragment key={'li' + i}>
            <li className='hover:underline'><Link to={page?.path ?? '#'}>
              {page?.name ?? 'undefined'}</Link></li>
            <li className='px-2'>/</li>
          </React.Fragment>))
        }
        <li>{crum?.currentPage?.name ?? 'undefined'}</li>
      </ul>
      <p className='font-bold text-2xl mt-2'>{crum?.currentPage?.name}</p>
    </header>
  </>
  )
}

Badcrumble.propTypes = {
  fromTo: PropTypes.array.isRequired
}
export default Badcrumble