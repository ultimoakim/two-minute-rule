export default function HomePage({user, setUser}) {
    return(
        <main className='callout secondary'>
            <h1>Welcome to the Two-Minute-Rule, {user.name}!</h1>
            <p>My name is Andy, and I am the creator of this web application! I hope you enjoy this website as much as I do, and I hope you enjoy its features.</p>
            <p>This website was inspired by a book titled "Atomic Habits" by the wonderful author James Clear. In that book, Mr. Clear states that the most important thing to maintaining good habits in life is not cramming everything in one go, but rather, to do habits <i>consistently.</i> It's just like when you're studying for a test in college; you wouldn't just cram every single topic in one day. You would practice little by little, but across the span of multiple days.</p>
            <p>Here, you're encouraged to simply spend only TWO minutes for one habit. I'm sure even you have at least two minutes to spare in a day, right?</p>
            <p>Have lots of fun gaining new habits, people!</p>
        </main>
    );
}