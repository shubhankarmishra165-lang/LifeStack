import './password.css'

const Card = (props) => {
  const { each, deleteCard, showpassword, togglepassword } = props

  return (
    <div className="card">
      <button
        className="delete-btn"
        title="Delete"
        onClick={() => deleteCard(each.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14H6L5 6" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M9 6V4h6v2" />
        </svg>
      </button>

      <h3>{each.sitename}</h3>

      <p>
        <strong>User:</strong>{' '}
        {showpassword[each.id] ? each.userName : '........'}
      </p>

      <p>
        <strong>Password:</strong>{' '}
        {showpassword[each.id] ? each.userpassword : '......'}
      </p>

      <input
        type="checkbox"
        id={`lock-${each.id}`}
        onChange={() => togglepassword(each.id)}
      />

      <label htmlFor={`lock-${each.id}`} className="lock-label">
        <span className="lock-wrapper">
          <span className="shackle"></span>
          <svg
            className="lock-body"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 5C0 2.23858 2.23858 0 5 0H23C25.7614 0 28 2.23858 28 5V23C28 25.7614 25.7614 28 23 28H5C2.23858 28 0 25.7614 0 23V5ZM16 13.2361C16.6137 12.6868 17 11.8885 17 11C17 9.34315 15.6569 8 14 8C12.3431 8 11 9.34315 11 11C11 11.8885 11.3863 12.6868 12 13.2361V18C12 19.1046 12.8954 20 14 20C15.1046 20 16 19.1046 16 18V13.2361Z"
              fill="white"
            />
          </svg>
        </span>
      </label>
    </div>
  )
}

export default Card