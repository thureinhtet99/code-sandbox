export default function CodeReviewFeedback() {
  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        <div className="pa-10 w-300 border">
          <h2>Readability</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15" data-testid="upvote-btn-0">
              👍 Upvote
            </button>
            <button className="py-10 px-15 danger" data-testid="downvote-btn-0">
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid="upvote-count-0">
            Upvotes: <strong>{0}</strong>
          </p>
          <p className="my-10 mx-0" data-testid="downvote-count-0">
            Downvotes: <strong>{0}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
