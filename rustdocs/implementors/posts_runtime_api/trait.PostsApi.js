(function() {var implementors = {};
implementors["subsocial_runtime"] = [{"text":"impl&lt;__SR_API_BLOCK__:&nbsp;<a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>, RuntimeApiImplCall:&nbsp;<a class=\"trait\" href=\"sp_api/trait.CallApiAt.html\" title=\"trait sp_api::CallApiAt\">CallApiAt</a>&lt;__SR_API_BLOCK__&gt; + 'static&gt; <a class=\"trait\" href=\"posts_runtime_api/trait.PostsApi.html\" title=\"trait posts_runtime_api::PostsApi\">PostsApi</a>&lt;__SR_API_BLOCK__, &lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"type\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"type\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"subsocial_runtime/struct.RuntimeApiImpl.html\" title=\"struct subsocial_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;__SR_API_BLOCK__, RuntimeApiImplCall&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RuntimeApiImplCall::<a class=\"type\" href=\"sp_api/trait.CallApiAt.html#associatedtype.StateBackend\" title=\"type sp_api::CallApiAt::StateBackend\">StateBackend</a>: <a class=\"trait\" href=\"sp_state_machine/backend/trait.Backend.html\" title=\"trait sp_state_machine::backend::Backend\">StateBackend</a>&lt;<a class=\"type\" href=\"sp_runtime/traits/type.HashFor.html\" title=\"type sp_runtime::traits::HashFor\">HashFor</a>&lt;__SR_API_BLOCK__&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"type\" href=\"pallet_utils/type.PostId.html\" title=\"type pallet_utils::PostId\">PostId</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"pallet_posts/rpc/struct.FlatPost.html\" title=\"struct pallet_posts::rpc::FlatPost\">FlatPost</a>&lt;<a class=\"type\" href=\"subsocial_runtime/type.AccountId.html\" title=\"type subsocial_runtime::AccountId\">AccountId</a>, <a class=\"type\" href=\"subsocial_runtime/type.BlockNumber.html\" title=\"type subsocial_runtime::BlockNumber\">BlockNumber</a>&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"pallet_posts/rpc/enum.FlatPostKind.html\" title=\"enum pallet_posts::rpc::FlatPostKind\">FlatPostKind</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"pallet_posts/rpc/struct.FlatPost.html\" title=\"struct pallet_posts::rpc::FlatPost\">FlatPost</a>&lt;<a class=\"type\" href=\"subsocial_runtime/type.AccountId.html\" title=\"type subsocial_runtime::AccountId\">AccountId</a>, <a class=\"type\" href=\"subsocial_runtime/type.BlockNumber.html\" title=\"type subsocial_runtime::BlockNumber\">BlockNumber</a>&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"pallet_utils/type.SpaceId.html\" title=\"type pallet_utils::SpaceId\">SpaceId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"pallet_posts/rpc/struct.FlatPost.html\" title=\"struct pallet_posts::rpc::FlatPost\">FlatPost</a>&lt;<a class=\"type\" href=\"subsocial_runtime/type.AccountId.html\" title=\"type subsocial_runtime::AccountId\">AccountId</a>, <a class=\"type\" href=\"subsocial_runtime/type.BlockNumber.html\" title=\"type subsocial_runtime::BlockNumber\">BlockNumber</a>&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"pallet_utils/type.SpaceId.html\" title=\"type pallet_utils::SpaceId\">SpaceId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"pallet_posts/rpc/struct.FlatPost.html\" title=\"struct pallet_posts::rpc::FlatPost\">FlatPost</a>&lt;<a class=\"type\" href=\"subsocial_runtime/type.AccountId.html\" title=\"type subsocial_runtime::AccountId\">AccountId</a>, <a class=\"type\" href=\"subsocial_runtime/type.BlockNumber.html\" title=\"type subsocial_runtime::BlockNumber\">BlockNumber</a>&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"pallet_utils/type.PostId.html\" title=\"type pallet_utils::PostId\">PostId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"type\" href=\"pallet_utils/type.PostId.html\" title=\"type pallet_utils::PostId\">PostId</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"type\" href=\"pallet_utils/type.PostId.html\" title=\"type pallet_utils::PostId\">PostId</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/collections/btree/map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree::map::BTreeMap\">BTreeMap</a>&lt;<a class=\"type\" href=\"pallet_utils/type.PostId.html\" title=\"type pallet_utils::PostId\">PostId</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"type\" href=\"pallet_utils/type.PostId.html\" title=\"type pallet_utils::PostId\">PostId</a>&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"pallet_utils/type.PostId.html\" title=\"type pallet_utils::PostId\">PostId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"pallet_posts/rpc/struct.FlatPost.html\" title=\"struct pallet_posts::rpc::FlatPost\">FlatPost</a>&lt;<a class=\"type\" href=\"subsocial_runtime/type.AccountId.html\" title=\"type subsocial_runtime::AccountId\">AccountId</a>, <a class=\"type\" href=\"subsocial_runtime/type.BlockNumber.html\" title=\"type subsocial_runtime::BlockNumber\">BlockNumber</a>&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"type\" href=\"pallet_utils/type.PostId.html\" title=\"type pallet_utils::PostId\">PostId</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"pallet_posts/rpc/type.RepliesByPostId.html\" title=\"type pallet_posts::rpc::RepliesByPostId\">RepliesByPostId</a>&lt;<a class=\"type\" href=\"subsocial_runtime/type.AccountId.html\" title=\"type subsocial_runtime::AccountId\">AccountId</a>, <a class=\"type\" href=\"subsocial_runtime/type.BlockNumber.html\" title=\"type subsocial_runtime::BlockNumber\">BlockNumber</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"pallet_utils/type.SpaceId.html\" title=\"type pallet_utils::SpaceId\">SpaceId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"type\" href=\"pallet_utils/type.PostId.html\" title=\"type pallet_utils::PostId\">PostId</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"pallet_utils/type.SpaceId.html\" title=\"type pallet_utils::SpaceId\">SpaceId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"type\" href=\"pallet_utils/type.PostId.html\" title=\"type pallet_utils::PostId\">PostId</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"pallet_utils/type.PostId.html\" title=\"type pallet_utils::PostId\">PostId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"subsocial_runtime/type.AccountId.html\" title=\"type subsocial_runtime::AccountId\">AccountId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"pallet_posts/rpc/struct.FlatPost.html\" title=\"struct pallet_posts::rpc::FlatPost\">FlatPost</a>&lt;<a class=\"type\" href=\"subsocial_runtime/type.AccountId.html\" title=\"type subsocial_runtime::AccountId\">AccountId</a>, <a class=\"type\" href=\"subsocial_runtime/type.BlockNumber.html\" title=\"type subsocial_runtime::BlockNumber\">BlockNumber</a>&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;__SR_API_BLOCK__::<a class=\"type\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":false,"types":["subsocial_runtime::RuntimeApiImpl"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()