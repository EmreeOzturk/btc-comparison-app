
type ResultRowProps = {
    loading?: boolean
}

const ResultRow: React.FC<ResultRowProps> = ({
    loading = true
}) => {
    if (loading) {
        return (
            <div className="border rounded-lg border-white/20 p-4
            bg-gradient-to-r skeleton from-indigo-400/30 to-purple-800/10 my-2
            h-28">
            </div>
        )
    }
    return (
        <div className="border min-h-12 rounded-lg border-white/20 p-4
        bg-gradient-to-r from-indigo-400/30 to-purple-800/10 my-2
    ">
            <div className="flex gap-4">
                <div>logo</div>
                <div className="flex-1 ">provider name</div>
                <div className="flex items-center gap-2">
                    <span className="text-xl text-purple-200/80">0.001</span>
                    <span className="text-xl text-purple-200/60">BTC</span>
                </div>
            </div>

            <div className=" flex justify-center mt-4">
                <button className=" w-24 h-10 bg-gradient-to-r from-indigo-400 to-purple-800 text-white/90
                        rounded-md px-4 py-2 font-bold
                        hover:from-indigo-500 hover:to-purple-900
                        focus:outline-none focus:ring-2 focus:ring-purple-600
                        ">
                    Buy
                </button>
            </div>

        </div>
    )
}

export default ResultRow